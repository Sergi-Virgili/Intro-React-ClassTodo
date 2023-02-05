import React from "react";

import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import taskServices from "../../apiServices/taskServices";

import TaskModel from "../../models/Task";

const TaskDetail = () => {
  let { id } = useParams();
  const [task, setTask] = useState({});

  // useEffect(() => {
  //   taskServices.getById(id).then((data) => {
  //     const taskModel = new TaskModel({ ...data });
  //     setTask(taskModel);
  //   });
  // }, []);

  const getTaskData = () => {
    taskServices.getById(id).then((data) => {
      const taskModel = new TaskModel({ ...data });
      setTask(taskModel);
    });
  };
  getTaskData();
  return (
    <div>
      {/* <Task item={task} />{" "} */}
      <h3>Detalle de la tarea {task.id}</h3>
      TITULO: {task.title}
    </div>
  );
};

export default TaskDetail;
