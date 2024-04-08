import { Button, Divider, Flex, Radio, Space, Typography } from "antd"
import { DownloadOutlined, SearchOutlined } from "@ant-design/icons"
import React, { FC, useState } from "react"
import { SizeType } from "antd/lib/config-provider/SizeContext"

export const Buttons: FC = () => {
  const [size, setSize] = useState<SizeType>("middle") // default is 'middle'

  return (
    <Flex flex={1} style={{ padding: "24px" }} justify={"center"}>
      <Space direction={"vertical"}>
        <Typography.Title>{"Buttons"}</Typography.Title>
        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
          <Radio.Button value={"large"}>{"Large"}</Radio.Button>
          <Radio.Button value={"middle"}>{"Default"}</Radio.Button>
          <Radio.Button value={"small"}>{"Small"}</Radio.Button>
        </Radio.Group>
        <Divider orientation={"left"} plain>
          {"Preview"}
        </Divider>
        <Flex gap={"small"} wrap={"wrap"}>
          <Button size={size} type={"primary"}>
            {"Primary Button"}
          </Button>
          <Button
            size={size}
            type={"primary"}
            icon={<SearchOutlined rev={null} />}
          >
            {"Primary Button"}
          </Button>
          <Button size={size} disabled type={"primary"}>
            {"Primary Button"}
          </Button>
          <Button
            type={"primary"}
            shape={"round"}
            icon={<DownloadOutlined rev={null} />}
            size={size}
          >
            {"Download"}
          </Button>
        </Flex>

        <Flex gap={"small"} wrap={"wrap"}>
          <Button size={size}>{"Default Button"}</Button>
          <Button size={size} icon={<SearchOutlined rev={null} />}>
            {"Default Button"}
          </Button>
          <Button size={size} disabled>
            {"Default Button"}
          </Button>
          <Button
            shape={"round"}
            icon={<DownloadOutlined rev={null} />}
            size={size}
          >
            {"Download"}
          </Button>
        </Flex>

        <Flex gap={"small"} wrap={"wrap"}>
          <Button size={size} type={"dashed"}>
            {"Dashed Button"}
          </Button>
          <Button
            size={size}
            icon={<SearchOutlined rev={null} />}
            type={"dashed"}
          >
            {"Dashed Button"}
          </Button>
          <Button size={size} disabled type={"dashed"}>
            {"Dashed Button"}
          </Button>
          <Button
            shape={"round"}
            type={"dashed"}
            icon={<DownloadOutlined rev={null} />}
            size={size}
          >
            {"Download"}
          </Button>
        </Flex>
        <Flex gap={"small"} wrap={"wrap"}>
          <Button size={size} type={"text"}>
            {"Text Button"}
          </Button>
          <Button
            size={size}
            icon={<SearchOutlined rev={null} />}
            type={"text"}
          >
            {"Text Button"}
          </Button>
          <Button size={size} disabled type={"text"}>
            {"Text Button"}
          </Button>
          <Button
            shape={"round"}
            type={"text"}
            icon={<DownloadOutlined rev={null} />}
            size={size}
          >
            {"Download"}
          </Button>
        </Flex>
        <Flex gap={"small"} wrap={"wrap"}>
          <Button size={size} type={"link"}>
            {"Link Button"}
          </Button>
          <Button
            size={size}
            icon={<SearchOutlined rev={null} />}
            type={"link"}
          >
            {"Link Button"}
          </Button>
          <Button size={size} disabled type={"link"}>
            {"Link Button"}
          </Button>
          <Button
            shape={"round"}
            disabled
            type={"link"}
            icon={<DownloadOutlined rev={null} />}
            size={size}
          >
            {"Download"}
          </Button>
        </Flex>
      </Space>
    </Flex>
  )
}
