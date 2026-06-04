import TodoItem from "./TodoItem";
import Form from "./Form";
import TodoList from "./TodoList";

import { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <Form todos={todos} setTodos={setTodos} />

      <TodoList todos={todos} />
    </div>
  );
};

export default Todo;
