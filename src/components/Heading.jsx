import React from "react";

function Heading() {
  return <h1 className="heading">Hello React</h1>;
}

export default Heading; // exporting this file so whicheven file needs it and imports will get access
// notice we only export the function but not call it because calling it will immediately return which we don't want.
// we want to use this function as a component in our index.js file
