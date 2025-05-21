"use strict";

export const Home = {
  "/": {
    state: {
      showGridModal: false,
    },
    H1: { text: "Hello Symbols" },
    P: { text: "Lorem ipsum dolor sit amet" },
    Button: {
      text: "Open Grid Selection",
      on: {
        click: () => {
          state.showGridModal = !state.showGridModal;
        },
      },
    },
    GridModal: {
      state: {
        show: () => state.showGridModal,
      },
    },
  },
};
