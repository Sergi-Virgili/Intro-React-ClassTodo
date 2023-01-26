import { dataBase } from "../data/database";

const taskServices = {
  getAllData: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(dataBase);
      }, 3000);
    });
  },
};

export default taskServices;
