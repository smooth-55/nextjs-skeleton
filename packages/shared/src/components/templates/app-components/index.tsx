import { Layout, Tabs as AntTabs } from "antd"
import React, { FC, Fragment } from "react"
import styled from "styled-components"
import Head from "next/head"
import { Buttons, Inputs, RadioButtons } from "../../organisms"

const Tabs = styled(AntTabs)`
  > .ant-tabs-nav {
    background-color: #001b2e;
  }
`

export const AppComponents: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>{"AppComponents"}</title>
      </Head>
      <Layout.Content>
        <Tabs
          type={"card"}
          centered={true}
          items={[
            {
              key: "button",
              label: "Buttons",
              children: <Buttons />,
            },
            {
              key: "inputs",
              label: "Inputs",
              children: <Inputs />,
            },
            {
              key: "radio",
              label: "Radio Buttons",
              children: <RadioButtons />,
            },
          ]}
        >
          <Tabs.TabPane></Tabs.TabPane>
        </Tabs>
      </Layout.Content>
    </Fragment>
  )
}
