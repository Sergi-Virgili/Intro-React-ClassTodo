import styles from "./taskForm.module.css";

export function TaskForm(props) {
  return (
    <section className={styles.formContainer}>
      <div>
        <input
          type="text"
          onChange={(e) => props.handlerChange(e.target.value)}
          placeholder="introduce tu nuevo item"
          value={props.newItem}
        />
        <button onClick={props.createItem}>ADD</button>
      </div>
    </section>
  );
}
