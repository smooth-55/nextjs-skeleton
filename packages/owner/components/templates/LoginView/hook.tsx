import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "@project/shared"
import Router from "next/router"
import * as Sentry from "@sentry/node"
import { message } from "antd"
import { CloseCircleFilled } from "@ant-design/icons"
import React, { useCallback } from "react"
import { LoginDetails, LoginViewProps } from "./types"
import { useTranslation } from "react-i18next"

export const useLoginHook = (): LoginViewProps => {
  const { t } = useTranslation()
  const [loading, setLoading] = React.useState(false)

  const handleLogin = useCallback(
    async ({ email, password }: LoginDetails) => {
      setLoading(true)
      try {
        const data = await signInWithEmailAndPassword(auth, email, password)

        if (!data || !data.user || !auth.currentUser) {
          return
        }
        Router.push("/")
      } catch (error) {
        Sentry.captureException(error)
        const errorCode = error.code
        if (errorCode === "auth/user-not-found") {
          message.error({
            content: t("Email address or password does not match."),
            key: "1",
            icon: (
              <CloseCircleFilled
                rev={null}
                onClick={() => message.destroy("1")}
              />
            ),
          })
          return
        }
        if (errorCode === "auth/wrong-password") {
          message.error({
            content: t("Email address or password does not match."),
            key: "2",
            icon: (
              <CloseCircleFilled
                rev={null}
                onClick={() => message.destroy("2")}
              />
            ),
          })
          return
        }
        if (errorCode === "auth/invalid-login-credentials") {
          message.error({
            content: t("Email address or password does not match."),
            key: "3",
            icon: (
              <CloseCircleFilled
                rev={null}
                onClick={() => message.destroy("3")}
              />
            ),
          })
          return
        }
        if (errorCode === "auth/user-disabled") {
          message.error({
            content: t(
              "We could not login you at this moment. Please contact your administration for inquiry"
            ),
            key: "4",
            icon: (
              <CloseCircleFilled
                rev={null}
                onClick={() => message.destroy("4")}
              />
            ),
          })
          return
        }
        message.error({
          key: "5",
          icon: (
            <CloseCircleFilled
              rev={null}
              onClick={() => message.destroy("5")}
            />
          ),
          content: t("An error has occurred. Please try again later."),
        })
      }
      setLoading(false)
    },
    [t]
  )
  return {
    handleLogin,
    loading,
  }
}
