import React, { FC, useContext } from "react"
import styled from "styled-components"
import { ConfigProvider, Flex, FlexProps, Typography } from "antd"
import { sharedColorScheme } from "../../../themes"

export const Label = styled(Typography.Text)`
  font-style: normal;
  font-weight: 500;
`

export const LabelContainer = styled.div`
  min-width: max-content;
  margin-bottom: 4px;
  display: flex;
  gap: 4px;
`

export const RequiredLabel = styled(Typography.Text)<{ color?: string }>`
  color: ${({ color }) => (color ? color : sharedColorScheme.colorError)};
`

const ErrorText = styled(Typography.Text)<{ color?: string }>`
  color: ${(props) =>
    props.color ? props.color : sharedColorScheme.colorError};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
`

export interface InputLabelProps extends FlexProps {
  label?: string
  required?: boolean
  error?: string
}

export const InputLabel: FC<InputLabelProps> = ({
  label,
  error = "Error",
  required,
  children,
  ...props
}) => {
  const { theme } = useContext(ConfigProvider.ConfigContext)

  return (
    <Flex vertical {...props}>
      <LabelContainer>
        <Label>{label}</Label>
        {required && (
          <RequiredLabel color={theme.token.colorError}>{"*"}</RequiredLabel>
        )}
      </LabelContainer>
      {children}
      {error && <ErrorText color={theme.token.colorError}>{error}</ErrorText>}
    </Flex>
  )
}
