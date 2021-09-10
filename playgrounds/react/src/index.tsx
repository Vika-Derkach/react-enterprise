import { Button } from "@ds.e/react";
import "@ds.e/scss/lib/Button.css";
import React from "react";
import ReactDOM from "react-dom";
// import '@ds.e/scss/lib/Utilities.css'
// import '@ds.e/scss/lib/Text.css'
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
    <Button label="Example Button" />
  </div>,
  document.querySelector("#root")
);
