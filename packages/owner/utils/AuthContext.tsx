import { createContext, FC, useCallback, useEffect, useState } from "react"
import { onAuthStateChanged, signOut, User } from "firebase/auth"
import { auth } from "@project/shared"
import { message } from "antd"
import { CloseCircleFilled } from "@ant-design/icons"
import * as Sentry from "@sentry/node"
import { useTranslation } from "react-i18next"

type ContextProps = {
  loading: boolean
  user: User | null
  authenticated: boolean
  setUser: any
  logout: () => void
}

export const AuthContext = createContext<Partial<ContextProps>>({})

export const AuthProvider: FC = ({ children }) => {
  const { t } = useTranslation()

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState<User | null>(null)

  const logout = useCallback(async () => {
    await signOut(auth)
    setUser(null)
  }, [])

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      try {
        if (user !== null) {
          setUser(user)
        } else {
          logout()
          await message.error({
            key: "01",
            icon: (
              <CloseCircleFilled
                rev={null}
                onClick={() => message.destroy("01")}
              />
            ),
            content: t("Unauthorized user"),
          })
        }
      } catch (error) {
        Sentry.captureException(error)
        await message.error({
          key: "02",
          content: t("An error has occurred. Please try again later."),
          icon: (
            <CloseCircleFilled
              rev={null}
              onClick={() => message.destroy("02")}
            />
          ),
        })
      } finally {
        setLoading(false)
      }
    })
  }, [logout, t])

  return (
    <AuthContext.Provider
      value={{
        loading,
        user,
        authenticated: user !== null,
        setUser,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
