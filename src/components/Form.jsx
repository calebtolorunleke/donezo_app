import { useState } from "react";
import styles from "./form.module.css";

const Form = ({ todos, setTodos }) => {
  //   const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  };

  return (
    <form className={styles.todoform}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          //   value={todo}
          value={todo.name}
          type="text"
          placeholder="Enter todo item..."
        />
        <button
          onClick={handleSubmit}
          type="submit"
          className={styles.modernButton}
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
