import "./App.css";
import React from "react";
import ReactDOM from "react-dom";
import { Route, Routes } from "react-router-dom";
import Todos from "./Todos";
import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Todos />} />
        <Route path="/todo/:id" element={<Todo />} />
      </Routes>
    </div>
  );
}

export default App;
