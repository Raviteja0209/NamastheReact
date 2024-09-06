import React from "react";
import ReactDOM from "react-dom/client";

//JSX element
const jxsheader = <span id="head">hello RT from jxs</span>;

//React functional component
const Title = () => (
  <h1>
    Hello Guru !!!
    <br></br>
    {jxsheader}
  </h1>
);

const HeaderComponent = () => (
  <div>
    <Title />
    {200 * 300}
    <h1 className="headingtag">Welcome to react world</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(jxsheader);

//render functionalcomponent
root.render(<HeaderComponent />);
