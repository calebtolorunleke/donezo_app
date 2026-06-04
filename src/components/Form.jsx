import { useState } from "react";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
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
  );
};

export default Form;
