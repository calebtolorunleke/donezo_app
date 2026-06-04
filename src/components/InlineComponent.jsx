// const header = { color: "blue", fontSize: "140px" };
// import "../css/style.css";
import styles from "./inlineComponent.module.css";

const InlineComponent = () => {
  return (
    <div>
      {/* <h1 style={header}>Inline Component</h1> */}
      {/* <h1 className="inline-header">Inline Component</h1> */}
      <h1 className={styles.header}>Inline Component</h1>
    </div>
  );
};

export default InlineComponent;
