import React from "react";
import ReactDOM from "react-dom";

const myName = "Prabhu";
const currentYear = new Date().getFullYear();

const htmlElement = (
  <div>
    <h1 className="heading">Hello React</h1>
    <p>This is React Introduction. My name is {myName}</p>
    <p>Copyright {currentYear}</p>
  </div>
);
// Rendering this htmlElement
ReactDOM.render(htmlElement, document.getElementById("root"));
