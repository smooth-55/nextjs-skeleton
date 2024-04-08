import { ThemeConfig } from "antd"
import { colorScheme } from "./colors-scheme"

export const themeConfig: ThemeConfig["token"] = {
  borderRadius: 4,
  fontFamily: "'Noto Sans JP', sans-serif",
}

export const antThemeConfig: ThemeConfig = {
  token: {
    ...colorScheme,
    ...themeConfig,
  },
  components: {
    Input: {
      controlHeightLG: 48,
      controlHeight: 40,
      controlHeightSM: 36,
      inputFontSizeLG: 14,
      colorBgContainer: "#fff",
    },
    Radio: {
      dotSize: 10,
      radioSize: 20,
    },
    Select: {
      controlHeight: 40,
      fontSizeIcon: 16,
      controlOutlineWidth: 1,
      colorPrimary: `${colorScheme.colorPrimary}`,
      colorBorder: `${colorScheme.colorBorder}`,
      optionSelectedBg: `${colorScheme.colorBgBase}`,
      multipleItemBg: `#fff`,
      multipleItemBorderColor: `${colorScheme.colorBgBase}`,
      colorPrimaryHover: `${colorScheme.colorBorder}`,
      colorIcon: `#000`,
    },
    Switch: {
      colorPrimary: `${colorScheme.colorPrimary}`,
    },
    Button: {
      controlHeight: 36,
    },
    Checkbox: {
      borderRadiusSM: 2,
    },
    Tabs: {
      cardHeight: 52,
      margin: 0,
      cardPadding: "8px 20px",
      cardGutter: 10,
      itemSelectedColor: "rgb(55, 255, 232)",
      itemHoverColor: "rgb(55, 255, 232)",
      // itemColor: "rgb(255, 255, 255)",
      colorBgContainer: "rgba(255, 255, 255, 0.07)",
      borderRadius: 100,
      lineType: "none",
      horizontalMargin: "0px",
    },
    Layout: {
      headerBg: "#001b2e",
      headerHeight: 40 + 52,
      headerPadding: "0 24px",
      footerPadding: "12px 48px",
      footerBg: "#fff",
    },
    Typography: {
      fontSizeHeading1: 20,
      fontSizeHeading2: 16,
      fontSizeHeading3: 14,
      fontSize: 14,
      fontSizeSM: 12,
      fontSizeLG: 16,
    },
    Table: {},
    Badge: {
      indicatorHeightSM: 14,
      textFontSizeSM: 12,
      fontSize: 10,
      lineWidth: 0,
    },
  },
}
