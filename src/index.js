import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Calculate from "./Component/Calculate/Calculate";
import Task from "./Component/Task/Task";
import Game from "./Component/Game/Game"
// import Sudoku from "./Component/Sudoku/Sudoku"
import GameTwo from "./Component/GameTwo/GameTwo"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Calculate/> */}
    {/* <Task/> */}
    {/* <Game/> */}
    {/* <Sudoku/> */}
    {/* <GameTwo/> */}
  </React.StrictMode>
);
