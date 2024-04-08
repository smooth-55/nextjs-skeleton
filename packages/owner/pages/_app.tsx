import Head from "next/head"
import * as Sentry from "@sentry/node"
import { AppProps } from "next/app"
import { useRouter } from "next/router"
import { analytics, LanguageOption } from "@project/shared"
import { useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { AuthProvider, GlobalStyles } from "../utils"
import "../utils/css-imports"
import { logEvent } from "firebase/analytics"
import { ConfigProvider } from "antd"
import i18next from "i18next"
import { antThemeConfig } from "@app/themes"
import jaJP from "antd/lib/locale/ja_JP"

const queryClient = new QueryClient({ defaultOptions: {} })

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    enabled: process.env.NODE_ENV !== "development",
    environment: `owner-${process.env.NODE_ENV}`,
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  })
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { events } = useRouter()

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const logAnalyticsEvent = (url: string) => {
        logEvent(analytics, "screen_view", {
          firebase_screen: url,
          firebase_screen_class: "skeleton-owner",
        })
      }

      events.on("routeChangeComplete", (url) => {
        window.scrollTo(0, 0)
        logAnalyticsEvent(url)
      })

      logAnalyticsEvent(window.location.pathname)
      return () => {
        events.off("routeChangeComplete", logAnalyticsEvent)
      }
    }
  }, [events])

  return (
    <>
      <Head>
        <title>{"Owner"}</title>
      </Head>
      <GlobalStyles />
      <ConfigProvider
        locale={i18next.language === "ja" && jaJP}
        theme={antThemeConfig}
      >
        {process.env.NEXT_ENV === "development" && <LanguageOption />}
        <QueryClientProvider client={queryClient}>
          <AuthProvider>
            <Component {...pageProps} />
            {process.env.NEXT_PUBLIC_ENVIRONMENT === "development" ? (
              <LanguageOption />
            ) : (
              <></>
            )}
          </AuthProvider>
        </QueryClientProvider>
      </ConfigProvider>
    </>
  )
}

export default MyApp
