import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
// file extension is optional in ES6

const myName = "Prabhu";
const currentYear = new Date().getFullYear();

const customStyle = {
  color: "violet",
  fontSize: "15px",
  padding: "5px 10px 5px 10px",
  border: "1px solid black"
};

// now we can change the customStyle properties dynamically through code.

customStyle.fontSize = "16px";

const htmlElement = (
  <div>
    <Heading />
    <p>This is React Introduction. My name is {myName}</p>
    <span style={customStyle}>Copyright {currentYear}</span>
  </div>
);
// Rendering this htmlElement
ReactDOM.render(htmlElement, document.getElementById("root"));
