import React from "react";
import styles from "./todoitem.module.css";

const TodoItem = ({ item }) => {
  return (
    <div className={styles.item}>
      <div key={item} className={styles.itemname}>
        {item}{" "}
        <span>
          <button>X</button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
};

export default TodoItem;
