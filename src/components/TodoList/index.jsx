import { v4 as uuid } from "uuid";

import React, { useState } from "react";
import { Task } from "../Task";
import { TaskForm } from "../TaskForm";
import styles from "./todoList.module.css";
import { dataBase } from "../../data/database";

export const TodoList = () => {
  const [data, setData] = useState(dataBase);
  const [newItem, setNewItem] = useState("");

  const createItem = () => {
    if (!newItem) return;
    const itemToAdd = {
      id: uuid(),
      title: newItem,
    };

    setData([itemToAdd, ...data]);
    setNewItem("");
  };

  const deleteItem = (id) => {
    const newState = data.filter((item) => item.id != id);
    setData(newState);
  };

  const handlerChange = (value) => {
    setNewItem(value);
  };

  const updateTask = (taskToUpdate) => {
    const updatedData = data.map((item) =>
      item.id != taskToUpdate.id ? item : taskToUpdate
    );
    setData(updatedData);
  };

  return (
    <div className="">
      <h1>TodoList</h1>
      <TaskForm
        newItem={newItem}
        createItem={createItem}
        handlerChange={handlerChange}
      ></TaskForm>
      <section className={styles.listContainer}>
        {data.map((item) => (
          <Task
            key={item.id}
            deleteItem={deleteItem}
            item={item}
            updateTask={updateTask}
          ></Task>
        ))}
      </section>
    </div>
  );
};
