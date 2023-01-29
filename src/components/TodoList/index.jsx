import { v4 as uuid } from "uuid";

import React, { useEffect, useState } from "react";
import Task from "../Task";
import { TaskForm } from "../TaskForm";
import styles from "./todoList.module.css";
import taskServices from "../../apiServices/taskServices";
import { FiCommand } from "react-icons/fi";
import TaskModel from "../../models/Task";

export const TodoList = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    taskServices.getAllData().then((x) => {
      setData(x);
      console.log(x);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    console.log("data modify");
  }, [data]);

  const createItem = () => {
    if (!newItem) return;
    const itemToAdd = new TaskModel({
      title: newItem,
    });

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
    console.log(taskToUpdate);
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
      />
      {isLoading && (
        <div style={{ textAlign: "center" }}>
          <FiCommand className="loading-icon" />
        </div>
      )}
      <section className={styles.listContainer}>
        {data.map((item) => (
          <Task
            key={item.id}
            deleteItem={deleteItem}
            item={item}
            updateTask={updateTask}
          />
        ))}
      </section>
    </div>
  );
};
