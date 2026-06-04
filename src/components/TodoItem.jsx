import React from "react";
import styles from "./todoitem.module.css";

const TodoItem = ({ item, todos, setTodos }) => {
  const handleDelete = (item) => {
    console.log("delete button clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
  };

  const handleClick = (name) => {
    // console.log("item span clicked ", name);
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo,
    );
    setTodos(newArray);
    console.log(todos);
  };
  const strikeline = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div key={item} className={styles.itemname}>
        <span className={strikeline} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            className={styles.deletebutton}
            onClick={() => handleDelete(item)}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
};

export default TodoItem;
