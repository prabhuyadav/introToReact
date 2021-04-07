import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import Copyright from "./Copyright";
// file extension is optional in ES6

const myName = "Prabhu";

const htmlElement = (
  <div>
    <Heading />
    <p>This is React Introduction. My name is {myName}</p>
    <Copyright />
  </div>
);
// Rendering this htmlElement
ReactDOM.render(htmlElement, document.getElementById("root"));
