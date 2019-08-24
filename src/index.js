import React from "react";
import ReactDOM from "react-dom";
import { Counter } from "./Counter";
import { List } from "./List";
import {HookCounter} from "./HookCounter";

ReactDOM.render(
  <>
    <h2>Счётчик</h2>
    <Counter />
    <hr/>
    <h2>hook Счётчик</h2>
    <HookCounter />
    <hr/>
    <h2>Список</h2>
    <List />
  </>,
  document.getElementById("root")
);
