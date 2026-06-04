import { useState } from "react";
import styles from "./form.module.css";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
  };

  return (
    <form className={styles.todoform}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
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
