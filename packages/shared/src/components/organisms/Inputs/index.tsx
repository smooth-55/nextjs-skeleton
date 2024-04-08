import { Divider, Flex, Input, Radio, Space, Typography } from "antd"
import React, { FC, useState } from "react"
import { SizeType } from "antd/lib/config-provider/SizeContext"
import { InputLabel } from "../../atom"

export const Inputs: FC = () => {
  const [size, setSize] = useState<SizeType>("middle") // default is 'middle'

  return (
    <Flex flex={1} style={{ padding: "24px" }} justify={"center"}>
      <Space direction={"vertical"}>
        <Typography.Title>{"Inputs"}</Typography.Title>
        <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
          <Radio.Button value={"large"}>{"Large"}</Radio.Button>
          <Radio.Button value={"middle"}>{"Middle"}</Radio.Button>
          <Radio.Button value={"small"}>{"Small"}</Radio.Button>
        </Radio.Group>
        <Divider orientation={"left"} plain>
          {"Preview"}
        </Divider>
        <Flex gap={"small"} wrap={"wrap"} vertical>
          <InputLabel required label={"Enter something"}>
            <Input
              size={size}
              placeholder={"Enter something"}
              showCount
              maxLength={10}
            />
          </InputLabel>
          <InputLabel required label={"Enter something"}>
            <Input
              size={size}
              placeholder={"Enter something"}
              variant={"filled"}
            />
          </InputLabel>
          <InputLabel required label={"Enter something"}>
            <Input
              size={size}
              placeholder={"Enter something"}
              variant={"borderless"}
            />
          </InputLabel>
          <InputLabel required label={"Enter something"}>
            <Input.Search size={size} placeholder={"Enter something"} />
          </InputLabel>
          <InputLabel required label={"Enter something"}>
            <Input.Password size={size} placeholder={"Enter something"} />
          </InputLabel>
          <InputLabel required label={"Enter something"}>
            <Input.TextArea size={size} placeholder={"Enter something"} />
          </InputLabel>
        </Flex>
      </Space>
    </Flex>
  )
}
