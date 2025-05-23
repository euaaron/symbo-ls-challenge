"use strict";
import { Flex } from "smbls";
import { GridModel } from "./GridModel";

export const GridFooter = {
  extend: Flex,
  props: {
    minWidth: "100%",
    padding: "Z B",
    align: "center space-between",
    gap: "A",
    fontFamily: "DefaultFont",
  },
  text: "Selection coordinates: {{selectedCol}},{{selectedRow}}",
};

export const GridSelection = {
  state: {
    columns: 16,
    rows: 8,
    cells: new GridModel(8, 16).get(),
    selectedCol: 0,
    selectedRow: 0,
  },
  props: {
    minWidth: "100%",
    minHeight: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "0.5rem",
    boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
    padding: "Z B",
    style: {
      display: "grid",
      gridAutoFlow: "column",
      gridTemplateColumns: (state) =>
        `repeat(${state.columns}, minmax(0, 1fr))`,
      gridTemplateRows: (state) => `repeat(${state.rows}, minmax(0, 1fr))`,
    },
    gap: "A",
  },
  Grid: {
    children: (element, state) => state.cells,
    childProps: {
      Cell: {
        onClick: (event, element, state) => {
          element.state.update({ isSelected: !state.isSelected });
          element.parent.state.update({
            selectedCol: element.state.col,
            selectedRow: element.state.row,
          });
        },
      },
    },
    childrenAs: "state",
  },
};

export const GridModal = {
  tag: "section",
  extends: Flex,
  state: {
    open: false,
    selectedCol: 0,
    selectedRow: 0,
  },
  class: "grid-modal",
  props: {
    style: (state) => ({
      display: state.open ? "flex" : "none",
    }),
    flex: "1",
    flexDirection: "row",
    minWidth: "90vw",
    minHeight: "fit-content",
    padding: "Z B",
    align: "center space-between",
    gap: "1rem",
    borderRadius: "1rem",
    color: "black",
  },
  h6: {
    text: "Grid Selection",
    props: {
      fontWeight: "bold",
      margin: "1rem 0",
    },
  },
  GridSelection,
  GridFooter,
};
