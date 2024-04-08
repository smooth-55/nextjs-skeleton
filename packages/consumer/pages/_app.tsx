import { AppProps } from "next/app"
import { analytics, LanguageOption } from "@project/shared"
import { useEffect } from "react"
import { useRouter } from "next/router"
import * as Sentry from "@sentry/node"
import { QueryClient, QueryClientProvider } from "react-query"
import { GlobalStyles } from "../utils"
import "../utils/css-imports"
import { logEvent } from "firebase/analytics"
import i18next from "i18next"
import jaJP from "antd/lib/locale/ja_JP"
import { App, ConfigProvider } from "antd"
import { antThemeConfig } from "@app/themes"

if (process.env.NEXT_PUBLIC_SENTRY_DSN) {
  Sentry.init({
    enabled: process.env.NODE_ENV !== "development",
    environment: `consumer-${process.env.NODE_ENV}`,
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  })
}

const queryClient = new QueryClient({ defaultOptions: {} })

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { events } = useRouter()

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      const logAnalyticsEvent = (url: string) => {
        logEvent(analytics, "screen_view", {
          firebase_screen: url,
          firebase_screen_class: "skeleton-consumer",
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
      <GlobalStyles />
      <ConfigProvider
        locale={i18next.language === "ja" && jaJP}
        theme={antThemeConfig}
      >
        <QueryClientProvider client={queryClient}>
          <App>
            <Component {...pageProps} />
          </App>

          {process.env.NEXT_PUBLIC_ENVIRONMENT === "development" ? (
            <LanguageOption />
          ) : (
            <></>
          )}
        </QueryClientProvider>
      </ConfigProvider>
    </>
  )
}

export default MyApp
