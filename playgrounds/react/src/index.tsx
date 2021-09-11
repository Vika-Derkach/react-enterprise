import { Color, Image, Margin, Select, Text } from "@ds.e/react";
import "@ds.e/scss/lib/global.css";
import "@ds.e/scss/lib/Margin.css";
import "@ds.e/scss/lib/Select.css";
import "@ds.e/scss/lib/Text.css";
import "@ds.e/scss/lib/Utilities.css";
// import "@ds.e/scss/lib/Button.css";
import React from "react";
import ReactDOM from "react-dom";

const options = [
  {
    label: "Strict Black",
    value: "strict-black",
  },
  {
    label: "Heavenly Green",
    value: "heavenly-green",
  },
  {
    label: "Sweet Pink",
    value: "pink",
  },
];

ReactDOM.render(
  <div style={{ padding: "40px" }}>
    {" "}
    <Select options={options} />
    <Color hexCode="#000" />
    <Image width="lg" height="lg" />
    <Margin left space="lg">
      <Text size="xl"> gfdfgxdg</Text>
    </Margin>
  </div>,
  document.querySelector("#root")
);
