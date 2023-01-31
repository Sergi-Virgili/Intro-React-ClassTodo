import axios from "axios";
import { dataBase } from "../data/database";
import TaskModel from "../models/Task";
import Task from "../models/Task";

const apiBase = process.env.REACT_APP_API_BASE;

const taskServices = {
  // getAllData: () => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve(dataBase.map((x) => new Task(x)));
  //     }, 3000);
  //   });
  // },
  // getAllData: () => {
  //   return fetch(apiBase)
  //     .then((res) => res.json())
  //     .then((data) => data.map((task) => new TaskModel(task)));
  // },
  async getAllData() {
    return await axios
      .get(apiBase)
      .then((res) => res.data.map((item) => new TaskModel({ ...item })));
  },
};

export default taskServices;
