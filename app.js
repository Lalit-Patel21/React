import React from "react";
import ReactDom from "react-dom/client";

const parent = React.createElement(
  "div",
  {},
  "this is namste react by akshay saini"
);
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(parent);
