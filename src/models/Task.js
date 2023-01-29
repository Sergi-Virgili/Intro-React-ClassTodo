import { v4 as uuid } from "uuid";

class TaskModel {
  constructor({ id = uuid(), title = "default title", isDone = false }) {
    this.id = id;
    this.title = title;
    this.isDone = isDone;
  }

  isDoneToggle() {
    this.isDone = !this.isDone;
  }
}

export default TaskModel;
