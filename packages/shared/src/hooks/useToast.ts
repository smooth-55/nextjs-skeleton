import { App } from "antd"

export const useToast = () => {
  const { notification } = App.useApp()
  const openNotification = ({
    type,
    message,
    description,
    duration = 3,
    placement = "bottomLeft",
  }: {
    type: "success" | "info" | "warning" | "error"
    message: string
    description?: string
    duration?: number
    placement?: "bottomLeft" | "bottomRight" | "topLeft" | "topRight"
  }) => {
    notification[type]({
      message,
      description,
      placement,
      duration,
    })
  }
  return { openNotification }
}
