import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

const data = [
  { name: "Eat", completed: true, id: "todo-0" },
  { name: "Sleep", completed: false, id: "todo-1" },
  { name: "Repeat", completed: false, id: "todo-2" },
];
root.render(
  <React.StrictMode>
    <App tasks={data} />
  </React.StrictMode>
);
