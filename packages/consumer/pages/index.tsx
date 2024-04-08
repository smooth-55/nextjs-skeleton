import { useToast } from "@project/shared"
import { Button, Flex, Tabs, TabsProps } from "antd"
import Head from "next/head"
import { useTranslation } from "react-i18next"

const Home = () => {
  const { t } = useTranslation()
  const { openNotification } = useToast()
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Components",
      children: "components",
    },
    {
      key: "2",
      label: "Hooks",
      children: (
        <Flex
          gap={16}
          wrap={"wrap"}
          style={{
            marginTop: "20px",
          }}
        >
          <Button
            type={"primary"}
            onClick={() =>
              openNotification({
                message: "success",
                type: "success",
                placement: "topRight",
              })
            }
          >
            {"Success"}
          </Button>
          <Button
            type={"primary"}
            onClick={() =>
              openNotification({
                message: "info",
                type: "info",
                placement: "topRight",
              })
            }
          >
            {"Info"}
          </Button>
          <Button
            type={"primary"}
            onClick={() =>
              openNotification({
                message: "Error",
                type: "error",
                placement: "topRight",
              })
            }
          >
            {"Error"}
          </Button>
          <Button
            type={"dashed"}
            onClick={() =>
              openNotification({
                message: "Warning",
                type: "warning",
                placement: "topRight",
              })
            }
          >
            {"Warning"}
          </Button>
        </Flex>
      ),
    },
  ]
  return (
    <>
      <Head>
        <title>{t("HomePage | Consumer ")}</title>
      </Head>
      <Flex align={"center"} justify={"center"}>
        <Tabs defaultActiveKey={"2"} items={items} />
      </Flex>
    </>
  )
}

export default Home
