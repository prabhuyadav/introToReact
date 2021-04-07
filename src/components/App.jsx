import React from "react";
import Heading from "./Heading";
import Copyright from "./Copyright";

const myName = "Prabhu";

function App() {
  const appHtml = (
    <div>
      <Heading />
      <p>This is React Introduction. My name is {myName}</p>
      <Copyright />
    </div>
  );
  return appHtml;
}

export default App;
