import { dataBase } from "../data/database";
import Task from "../models/Task";

const taskServices = {
  getAllData: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataBase.map((x) => new Task(x)));
      }, 3000);
    });
  },
};

export default taskServices;
