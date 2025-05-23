"use strict";

import { DEFAULT_ICONS } from "@symbo.ls/default-icons";

/**
 * Colors
 * @tutorial https://docs.symbols.app/color
 */
const COLOR = {
  transparent: "transparent",
  black: "black",
  white: "white",
  orange: "#E98232",
  blue: "#3c7bd9",
  lightBlue: "#e8f1ff",
  modalBlack: " #101011",
  modalWhite: "#F9F9F9",
  modalMidnight: "#1d3b59",
};

/**
 * Gradients
 * @tutorial https://docs.symbols.app/color
 */
const GRADIENT = {};

/**
 * Themes
 * @tutorial https://docs.symbols.app/theme
 */
const THEME = {
  document: {
    "@dark": {
      color: "white",
      background: "black",
    },
    "@light": {
      background: "white",
      color: "black",
    },
    "@midnight": {
      background: "#112233",
      color: "white",
    },
  },
  GridModal: {
    "@dark": {
      background: "modalBlack",
    },
    "@light": {
      background: "modalWhite",
    },
    "@midnight": {
      background: "modalMidnight",
    },
  },
};

/**
 * Fonts
 * @tutorial https://docs.symbols.app/font
 */
const FONT = {
  Europa: [
    {
      url: "https://raw.githubusercontent.com/limbforge/website/refs/heads/master/app/assets/fonts/europa-lightitalic-webfont.woff",
      fontWeight: 300,
      fontStyle: "italic",
    },
    {
      url: "https://raw.githubusercontent.com/limbforge/website/refs/heads/master/app/assets/fonts/europa-regularitalic-webfont.woff",
      fontWeight: 400,
      fontStyle: "italic",
    },
    {
      url: "https://raw.githubusercontent.com/limbforge/website/refs/heads/master/app/assets/fonts/europa-bolditalic-webfont.woff",
      fontWeight: 600,
      fontStyle: "italic",
    },
    {
      url: "https://raw.githubusercontent.com/limbforge/website/refs/heads/master/app/assets/fonts/europa-light-webfont.woff",
      fontWeight: 300,
    },
    {
      url: "https://raw.githubusercontent.com/limbforge/website/refs/heads/master/app/assets/fonts/europa-regular-webfont.woff",
      fontWeight: 400,
    },
    {
      url: "https://raw.githubusercontent.com/limbforge/website/refs/heads/master/app/assets/fonts/europa-bold-webfont.woff",
      fontWeight: 600,
    },
  ],
};

/**
 * Font families
 * @tutorial https://docs.symbols.app/font
 */
const FONT_FAMILY = {
  DefaultFont: {
    isDefault: true,
    value: ["Europa"],
    type: "sans-serif",
  },
};

/**
 * Typography
 * @tutorial https://docs.symbols.app/typography
 * @tutorial https://docs.symbols.app/sequence
 */
const TYPOGRAPHY = {
  base: 16,
  ratio: 1.2,
};

/**
 * Spacing
 * @tutorial https://docs.symbols.app/spacing
 * @tutorial https://docs.symbols.app/sequence
 */
const SPACING = {};

const options = {
  verbose: false,
  useReset: true,
  useDocumentTheme: true,
  useFontImport: true,
  useVariable: true,
  useSvgSprite: true,
  useIconSprite: true,
};

export default {
  ...options,
  COLOR,
  GRADIENT,
  THEME,
  ICONS: DEFAULT_ICONS,
  TYPOGRAPHY,
  SPACING,
  FONT,
  FONT_FAMILY,
};
