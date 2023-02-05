import { v4 as uuid } from "uuid";

class TaskModel {
  constructor({
    id = uuid(),
    title = "default title",
    isDone = false,
    img = "https://thumbs.dreamstime.com/b/todo-pegajoso-11106198.jpg",
  }) {
    this.id = id;
    this.title = title;
    this.isDone = isDone;
    this.img = img;
  }

  isDoneToggle() {
    this.isDone = !this.isDone;
  }
}

export default TaskModel;
