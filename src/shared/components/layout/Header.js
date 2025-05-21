"use strict";
import { Flex, Link } from "smbls";


export const Header = {
  extend: Flex,
  props: {
    minWidth: "100%",
    padding: "Z B",
    align: "center space-between",
  },

  Flex: {
    props: { gap: "C" },
    childExtend: {
      extend: Link,
      props: ({ props }) => ({
        textDecoration: window.location.pathname === props.href ? "underline" : "none",
      }),
    },
    Text_logo: { href: "/", text: "Hello!" },
    Text_about: { href: "/about", text: "About" },
  },

  ThemeSwitcher: {},
};
