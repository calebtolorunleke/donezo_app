import { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <div>
      <form>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button onClick={handleSubmit} type="submit">
          Add
        </button>
      </form>

      {todos.map((item) => (
        <TodoItem key={item} item={item} />
      ))}
    </div>
  );
};

export default Todo;
