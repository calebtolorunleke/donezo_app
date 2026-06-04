import styles from "./footer.module.css";
const Footer = ({ completedTodos, totalTodos }) => {
  return (
    <footer className={styles.footer}>
      <span className={styles.item}>Completed Todos: {completedTodos}</span>
      <span>Total Todos: {totalTodos}</span>
    </footer>
  );
};

export default Footer;
