import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "hello from react"
);
console.log(heading);

const jsxHeading = <h1 id="jsxHeading">hello from jsx heading</h1>;
console.log(jsxHeading);

// root.render(jsxHeading);
const Title = () => <h1>title Componenet</h1>;
const HeadingComponenet = function () {
  return (
    <div>
      <Title />
      {Title()}
      <h1>heading Componenet</h1>
      {jsxHeading}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponenet />);
