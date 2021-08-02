import React, { useState } from "react";
import "./styles.css";

var wel = "Welcome!";
// var color = "blue";
// var name = prompt("What's you name?");

var heading = " Hello ALians!";
// var Click = 0;
export default function App() {
  const [Click, watchClick] = useState(0);
  function clickHandler() {
    // console.log("Click", watchClick);
    watchClick(Click + 1);
  }

  return (
    <div className="App">
      <h1>{heading}</h1>
      <h2>{wel}</h2>
      <button onClick={clickHandler}> Click me</button>
      {Click}
    </div>
  );
}
