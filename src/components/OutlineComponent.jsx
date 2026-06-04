// import "../css/style.css";
import styles from "./outliineComponent.module.css";

const OutlineComponent = () => {
  return (
    <div>
      {/* <h1 className="outline-header">Outline Component</h1> */}
      <h1 className={styles.header}>Outline Component</h1>
    </div>
  );
};

export default OutlineComponent;
