import React from "react";
// import InlineComponent from "./components/InlineComponent";
// import OutlineComponent from "./components/OutlineComponent";
import Todo from "./components/Todo";
import Header from "./components/Header";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <Todo />
      {/* <InlineComponent />
      <OutlineComponent /> */}
    </div>
  );
};

export default App;
