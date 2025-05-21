"use strict";

import { Flex, Link } from "smbls";

export const App = {
  extend: Flex,

  props: {
    theme: "document",
    flow: "column",
    height: "100vh",
    align: "center space-between",
  },

  Header: {},

  content: {},

  Footer: {
    extend: Flex,
    props: {
      fontFamily: "DefaultFont",
      gap: "0.25rem",
    },
    text: "Created by",
    CreatedBy: {
      extends: Link,
      display: "flex",
      text: "Aaron Carneiro",
      href: "https://github.com/euaaron",
      target: "_blank",
      textDecoration: "underline",
      ":visited": {
        color: "orange",
      },
    },
    text2: "with",
    Using: {
      extends: Link,
      display: "flex",
      text: "Symbols Starter Kit.",
      href: "https://github.com/symbo-ls/starter-kit",
      target: "_blank",
      textDecoration: "underline",
      ":visited": {
        color: "orange",
      },
    },
  },
};
