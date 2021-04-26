export default class UserModel {
  id;
  username;
  todos;
  email;

  constructor(id, username, todos, email) {
    this.id = id;
    this.username = username;
    this.todos = todos;
    this.email = email;
  }
}
