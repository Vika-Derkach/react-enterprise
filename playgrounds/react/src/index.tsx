import { Color, Image, Text } from "@ds.e/react";
import "@ds.e/scss/lib/Text.css";
import "@ds.e/scss/lib/Utilities.css";
// import "@ds.e/scss/lib/Button.css";
import React from "react";
import ReactDOM from "react-dom";
// import '@ds.e/scss/lib/Margin.css'
// import '@ds.e/scss/lib/Select.css'
// import '@ds.e/scss/lib/global.css'

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
  <div>
    {" "}
    <Color hexCode="#000" />
    <Image width="lg" height="lg" />
    <Text size="lg"> gfdfgxdg</Text>
  </div>,
  document.querySelector("#root")
);
