import React from "react";
import ReactDOM from "react-dom";

const myName = "Prabhu";

const htmlElement = (
  <div>
    <h1>Hello React</h1>
    <p>This is React Introduction. My name is {myName}</p>
  </div>
);
// Rendering this htmlElement
ReactDOM.render(htmlElement, document.getElementById("root"));
