// css
import { Spacing } from "@ds.e/foundation";
import "@ds.e/scss/lib/Utilities.css";
import { select, text } from "@storybook/addon-knobs";
import React from "react";
import Color from "./Color";

export default {
  title: "Atoms|Color",
};
export const Common = () => <Color hexCode="green" width="sm" height="xxl" />;
export const CommonPick = () => <Color hexCode={text("HexCode", "pink")} />;

export const CustomDimensions = () => (
  <Color
    hexCode={text("HexCode", "pink")}
    width={select("Width", Object.values(Spacing), "xxl")}
    height={select("Height", Object.values(Spacing), "xxl")}
  />
);
