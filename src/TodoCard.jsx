import { useNavigate } from "react-router-dom";

const TodoCard = (props) => {
  const { todo } = props;
  const { title, completed, id } = todo;
  const nav = useNavigate();

  return (
    <div
      style={{ backgroundColor: "grey", margin: "20px", padding: "10px" }}
      onClick={() => nav(`/todo/${id}`)}
    >
      <h1>{title}</h1>
      <p> {`completed: ${completed}`} </p>
    </div>
  );
};

export default TodoCard;
