import { FC } from "react"
import { Button, Flex, Input, Layout, Typography } from "antd"
import { LoginDetails, LoginViewProps } from "./types"
import { useTranslation } from "react-i18next"
import * as yup from "yup"
import { useFormik } from "formik"
import { InputLabel } from "@project/shared"
import styled from "styled-components"
import { colorScheme } from "@app/themes"

const PasswordInput = styled(Input.Password)`
  > .ant-input-suffix {
    > .ant-input-password-icon {
      color: ${colorScheme.colorPrimary};

      :hover {
        color: ${colorScheme.colorPrimary};
      }
    }
  }
`

export const LoginView: FC<LoginViewProps> = ({ handleLogin, loading }) => {
  const { t } = useTranslation()

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email(t("Please enter your e-mail address"))
      .required(t("Please enter")),
    password: yup.string().required(t("Please enter")),
  })

  const formik = useFormik<LoginDetails>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleLogin(values)
    },
  })

  return (
    <Layout style={{ height: "100vh" }}>
      <Flex flex={1} align={"center"} justify={"center"} vertical>
        <Flex
          component={"form"}
          gap={16}
          vertical
          onSubmit={formik.handleSubmit}
        >
          <Typography.Title style={{ fontSize: "32px" }}>
            {"Login"}
          </Typography.Title>
          <Flex gap={16} vertical>
            <InputLabel label={"Email"}>
              <Input
                name={"email"}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                size={"large"}
              />
            </InputLabel>
            <InputLabel label={"Password"}>
              <PasswordInput
                name={"password"}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                size={"large"}
              />
            </InputLabel>
            <Button
              loading={loading}
              htmlType={"submit"}
              type={"primary"}
              size={"large"}
            >
              {"Login"}
            </Button>
          </Flex>
        </Flex>
        <Typography.Text style={{ position: "absolute", bottom: "1.5%" }}>
          {"Copyright © Next-js Skeleton"}
        </Typography.Text>
      </Flex>
    </Layout>
  )
}
