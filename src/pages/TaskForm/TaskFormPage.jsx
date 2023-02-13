import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import taskServices from "../../apiServices/taskServices";
import TaskModel from "../../models/Task";
import styles from "./TaskFormPage.module.css";

const initTask = new TaskModel({});

function TaskFormPage() {
  const [newTask, setNewTask] = useState(initTask);
  const navigator = useNavigate();

  const handleOnChangeForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name);
    newTask[name] = value;
    setNewTask({ ...newTask });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await taskServices.create(newTask);
    navigator("/");
  };

  return (
    <div>
      <form
        className={styles.formContainer}
        // onChange={handleOnChangeForm}
        onSubmit={handleSubmit}
      >
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
            onChange={handleOnChangeForm}
          />

          <textarea
            title=""
            name="img"
            type="area"
            placeholder="image url"
            value={newTask.img}
            onChange={handleOnChangeForm}
          />
          <button type="submit">Create</button>
        </section>
      </form>
    </div>
  );
}

export default TaskFormPage;
