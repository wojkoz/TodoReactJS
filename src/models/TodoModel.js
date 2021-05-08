export default class TodoModel {
  todoId;
  title;
  description;
  userId;

  constructor(title, description, todoId, userId) {
    this.todoId = todoId;
    this.title = title;
    this.description = description;
    this.userId = userId;
  }
}
