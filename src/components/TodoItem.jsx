import React from "react";

const TodoItem = ({ item }) => {
  return (
    <div>
      <h1 key={item}>{item}</h1>
    </div>
  );
};

export default TodoItem;
