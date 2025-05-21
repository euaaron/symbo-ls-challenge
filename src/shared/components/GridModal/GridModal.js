"use strict";
import { Flex, Grid } from "smbls";
import { Cell } from "./Cell";

export function getGridProps(rows = 8, columns = 16) {
  return {
    gridTemplateColumns: `repeat(${columns}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  };
}

export const GridFooter = {
  extend: Flex,
  props: {
    minWidth: "100%",
    padding: "Z B",
    align: "center space-between",
    gap: "A",
    fontFamily: 'DefaultFont',
  },
  text: 'Selection coordinates: {{parent.colNumber}},{{parent.rowNumber}}',
};

export const GridSelection = {
  extend: Grid,
  state: {
    cells: [],
    columns: 16,
    rows: 8,
  },
  props: {
    minWidth: "fit-content",
    minHeight: "fit-content",
    maxWidth: "100%",
    maxHeight: "100%",
    background: "white",
    borderRadius: "0.5rem",
    boxShadow: "0 0 0.5rem rgba(0, 0, 0, 0.5)",
    padding: "Z B",
    gap: "A",
  },
  Cell
};

export const GridModal = {
  extends: Flex,
  state: {
    show: false,
  },
  props: {
    display: (element, state) => (state.show ? "flex" : "none"),
    zIndex: 100,
    position: "absolute",
    top: "50%",
    bottom: "50%",
    margin: "auto auto",
    flexDirection: "column",
    minWidth: "fit-content",
    minHeight: "fit-content",
    padding: "Z B",
    align: "center space-between",
    gap: "1rem",
    background: "white",
    borderRadius: "1rem",
    color: "black",
  },
  'h6': {
    text: "Grid Selection",
    props: {
      fontWeight: "bold",
      margin: "1rem 0",
    }
  },
  GridSelection,
  GridFooter,
}