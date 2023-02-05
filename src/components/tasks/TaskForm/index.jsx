import styles from "./taskForm.module.css";

export default function TaskForm(props) {
  return (
    <section className={styles.formContainer}>
      <div>
        <input
          className=".input"
          type="text"
          onChange={(e) => props.handlerChange(e.target.value)}
          placeholder="introduce tu nuevo item"
          value={props.newItem}
        />
        <button className=".button" onClick={props.createItem}>
          ADD
        </button>
      </div>
    </section>
  );
}
