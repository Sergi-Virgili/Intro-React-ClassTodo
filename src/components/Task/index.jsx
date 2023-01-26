import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./task.module.css";
import { FiCheck, FiX } from "react-icons/fi";

export const Task = ({ item, deleteItem, updateTask }) => {
  const [input, setInput] = useState(item);
  const [isEditMode, setIsEditMode] = useState(false);
  // useEffect(() => {},[])

  const handlerInput = (value) => {
    setInput({ ...input, title: value });
  };

  const handlerUpdateTask = () => {
    updateTask(input);
    setIsEditMode(false);
  };

  return (
    <article className={styles.taskContainer}>
      {!isEditMode ? (
        <h3>
          <span onClick={() => setIsEditMode(!isEditMode)}>{item.title}</span>
        </h3>
      ) : (
        <>
          <input
            type="text"
            value={input.title}
            onChange={(e) => handlerInput(e.target.value)}
          />
          <FiX
            onClick={() => {
              setIsEditMode(false);
              setInput(item);
            }}
          />
          <FiCheck onClick={() => handlerUpdateTask()} />
        </>
      )}
      <div className={styles.deleteButton} onClick={() => deleteItem(item.id)}>
        X
      </div>
    </article>
  );
};
