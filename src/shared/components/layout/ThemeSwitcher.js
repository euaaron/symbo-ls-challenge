"use strict";
import { Flex } from "smbls";


export const ThemeSwitcher = {
  extend: Flex,
  props: { gap: "A2" },
  childExtend: {
    props: (element, state) => ({
      active: state.globalTheme === element.key,
      cursor: "pointer",
      ".active": {
        fontWeight: "900",
      },
    }),
    on: {
      click: (event, element, state) => {
        state.update({ globalTheme: element.key });
      },
    },
  },
  dark: { text: "Dark" },
  light: { text: "Light" },
  midnight: { text: "Midnight" },
};
