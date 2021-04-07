import React from "react";

const currentYear = new Date().getFullYear();

const customStyle = {
  color: "violet",
  fontSize: "15px",
  padding: "5px 10px 5px 10px",
  border: "1px solid black"
};

// now we can change the customStyle properties dynamically through code.

customStyle.fontSize = "16px";

function Copyright() {
  return <span style={customStyle}>Copyright {currentYear}</span>;
}

export default Copyright;
