import React, { useState } from "react"
import { Divider, Flex, Radio, RadioChangeEvent, Space, Typography } from "antd"
import { SizeType } from "antd/lib/config-provider/SizeContext"

const plainOptions = ["Apple", "Pear", "Orange"]
const options = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange", title: "Orange" },
]
const optionsWithDisabled = [
  { label: "Apple", value: "Apple" },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange", disabled: true },
]

export const RadioButtons: React.FC = () => {
  const [value1, setValue1] = useState("Apple")
  const [value2, setValue2] = useState("Apple")
  const [value3, setValue3] = useState("Apple")
  const [value4, setValue4] = useState("Apple")
  const [size, setSize] = useState<SizeType>("middle") // default is 'middle'

  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    setValue1(value)
  }

  const onChange2 = ({ target: { value } }: RadioChangeEvent) => {
    setValue2(value)
  }

  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    setValue3(value)
  }

  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    setValue4(value)
  }

  return (
    <Flex flex={1} style={{ padding: "24px" }} justify={"center"}>
      <Space direction={"vertical"}>
        <Typography.Title>{"RadioButtons"}</Typography.Title>
        <Radio.Group
          size={size}
          value={size}
          onChange={(e) => setSize(e.target.value)}
        >
          <Radio.Button value={"large"}>{"Large"}</Radio.Button>
          <Radio.Button value={"middle"}>{"Middle"}</Radio.Button>
          <Radio.Button value={"small"}>{"Small"}</Radio.Button>
        </Radio.Group>
        <Divider orientation={"left"} plain>
          {"Preview"}
        </Divider>
        <Radio.Group
          buttonStyle={"solid"}
          size={size}
          options={plainOptions}
          onChange={onChange1}
          value={value1}
        />
        <br />
        <Radio.Group
          buttonStyle={"outline"}
          size={size}
          options={optionsWithDisabled}
          onChange={onChange2}
          value={value2}
        />
        <br />
        <br />
        <Radio.Group
          size={size}
          options={options}
          onChange={onChange3}
          value={value3}
          optionType={"button"}
        />
        <br />
        <br />
        <Radio.Group
          size={size}
          options={optionsWithDisabled}
          onChange={onChange4}
          value={value4}
          optionType={"button"}
          buttonStyle={"solid"}
        />
      </Space>
    </Flex>
  )
}
