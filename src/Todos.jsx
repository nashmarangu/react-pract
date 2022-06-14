import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import TodoCard from "./TodoCard";

const Todos = () => {
  const [todos, setTodos] = useState();
  useEffect(() => {
    axios({
      method: "get",
      url: "https://jsonplaceholder.typicode.com/todos",
    }).then(function (response) {
      const responseData = response.data;
      setTodos(responseData);
    });
  }, []);

  return (
    <div>
      {todos ? (
        <div className="card">
          {todos.slice(0, 10).map((todo) => (
            <TodoCard key={todo.id} todo={todo} />
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Todos;
