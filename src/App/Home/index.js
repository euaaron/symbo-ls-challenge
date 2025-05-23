"use strict";

export const Home = {
  "/": {
    state: {
      showGridModal: true,
    },
    H1: { text: "Hello Symbols" },
    P: { text: "Lorem ipsum dolor sit amet" },
    Button: {
      text: "Open Grid Selection",
      on: {
        click: (element, state) =>
          state.update({ showGridModal: !state.showGridModal }),
      },
      Icon: { color: "white .35", name: "arrowDown" },
    },
    childProps: {
      GridModal: {},
    },
  },
};
