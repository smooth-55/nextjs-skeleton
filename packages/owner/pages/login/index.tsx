import React from "react"
import Head from "next/head"
import RestrictedRoute from "../../withRestrictedRoute"
import { LoginView, useLoginHook } from "@app/components"

const LoginPage: React.FC = () => {
  const props = useLoginHook()

  return (
    <>
      <Head>
        <title>{"Login"}</title>
      </Head>
      <LoginView {...props} />
    </>
  )
}

export default RestrictedRoute(LoginPage)
