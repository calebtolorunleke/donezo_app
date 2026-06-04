import React from "react";
import styles from "./todoitem.module.css";

const TodoItem = ({ item }) => {
  const handleDelete = (item) => {
    console.log("delete button clicked for item", item);
  };
  return (
    <div className={styles.item}>
      <div key={item} className={styles.itemname}>
        {item}{" "}
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
