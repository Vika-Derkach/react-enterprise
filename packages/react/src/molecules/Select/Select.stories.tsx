// css
import "@ds.e/scss/lib/Select.css";
import { withA11Y } from "@storybook/addon-a11y";
import React from "react";
import Select from "./Select";

const options = [
  {
    label: "Strict Black",
    value: "black",
  },
  {
    label: "Heavenly Green",
    value: "green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

export default {
  title: "Molecules|Select",
  decorators: [withA11Y],
};

export const Common = () => <Select options={options} />;
