import React, { useEffect, useState } from "react";
import Task from "../Task";
import TaskForm from "../TaskForm";
import styles from "./todoList.module.css";
import taskServices from "../../../apiServices/taskServices";
import TaskModel from "../../../models/Task";
import Loader from "../../atoms/Loader/Loader";

const TodoList = () => {
  const [data, setData] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState("");

  useEffect(() => {
    taskServices.getAllData().then((x) => {
      setData(x);
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

  const deleteItem = async (id) => {
    await taskServices.deleteById(id);
    const newState = data.filter((item) => item.id != id);
    setData(newState);
    setToast("deleted");
    setTimeout(() => {
      setToast("");
    }, 2000);
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
      {/* <TaskForm
        newItem={newItem}
        createItem={createItem}
        handlerChange={handlerChange}
      /> */}
      {isLoading && <Loader />}
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

      <div className={toast ? `${styles.toast}` : `${styles.hide}`}>
        {toast}
      </div>
    </div>
  );
};
export default TodoList;
