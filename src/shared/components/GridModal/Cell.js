"use strict";
import { Flex } from "smbls";

export const Cell = {
  extend: Flex,
  state: {
    isSelected: false,
  },
  on: {
    click: (event, element, state) => {
      state.update({ isSelected: !state.isSelected });
    },
  },
  props: (element, state) => ({
    cursor: "pointer",
    padding: "A",
    gap: "A",
    background: state.isSelected ? "blue" : "lightBlue",
    flexDirection: "column",
    aspectRatio: "1 / 1",
    width: "10vw",
    height: "10vw",
    borderRadius: "0.25rem",
    transition: "background 0.2s ease-in-out",
    ":hover": {
      background: state.isSelected ? "#2d5ea5" : "#b9c0cc",
    },
  }),
  Flex: {
    props: {
      flex: "1",
    },
  },
};
