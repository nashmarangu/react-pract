import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";

const Todo = () => {
  const { id } = useParams();
  const [todoDetails, setTodoDetails] = useState({});
  useEffect(() => {
    axios({
      method: "get",
      url: `https://jsonplaceholder.typicode.com/todos/${id}`,
    }).then(function (response) {
      const responseDetails = response.data;
      setTodoDetails(responseDetails);
    });
  }, []);
  const { id: todoId, userId, title, completed } = todoDetails;
  console.log(todoDetails);
  return (
    <div>
      {todoDetails ? (
        <div>
          <h1> {`Todo id: ${todoId}`} </h1>
          <h1> {`Todo userid: ${userId}`} </h1>
          <h1> {`Todo title: ${title}`} </h1>
          <h1> {`Todo completed: ${completed}`} </h1>
        </div>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};
export default Todo;
