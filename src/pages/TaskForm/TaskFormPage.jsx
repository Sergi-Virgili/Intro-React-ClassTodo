import React from "react";
import { useState } from "react";
import TaskModel from "../../models/Task";
import styles from "./TaskFormPage.module.css";

const initTask = new TaskModel({});

function TaskFormPage() {
  const [newTask, setNewTask] = useState(initTask);

  const handleOnChangeForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
    const temp = (newTask[name] = value);
    setNewTask({ ...newTask, temp });
  };

  return (
    <div>
      <form className={styles.formContainer} onChange={handleOnChangeForm}>
        <div className={styles.imageContainer}>
          <img src={newTask.img} alt="taskTitle" />
        </div>
        <section className={styles.inputsSection}>
          <input
            title=""
            name="title"
            type="text"
            placeholder="task name"
            value={newTask.title}
          />

          <textarea
            title=""
            name="img"
            type="area"
            placeholder="image url"
            value={newTask.img}
            // onChange={() => setNewTask({ ...newTask, img: "jaksjd" })}
          />
        </section>
      </form>
    </div>
  );
}

export default TaskFormPage;
