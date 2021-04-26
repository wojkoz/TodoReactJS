export default class TodoModel {
  todoId;
  title;
  description;
  userId;

  constructor(
    title,
    description,
    todoId = Math.random() * 100,
    userId = Math.random() * 100
  ) {
    this.todoId = todoId;
    this.title = title;
    this.description = description;
    this.userId = userId;
  }
}
