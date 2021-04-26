import UserModel from "../models/UserModel";
import TodoModel from "../models/TodoModel";

const BASE_URL = "https://localhost:5001/api/";
const TOKEN = "TOKEN";

export const login = async (email, password) => {
  const data = {
    password: password,
    email: email,
  };

  const response = await fetchData(
    BASE_URL + "Authenticate/login",
    data,
    "POST",
    false
  );

  if (!response.ok) {
    const awaitedRes = JSON.parse(await response.text());
    return [null, { message: awaitedRes.message, errors: awaitedRes.errors }];
  }

  const body = JSON.parse(await response.text());

  localStorage.setItem(TOKEN, body.token);

  const user = parseToUser(body.user);

  return [user, ""];
};

export const register = async (email, username, password) => {
  const data = {
    password: password,
    email: email,
    userName: username,
  };

  const response = await fetchData(
    BASE_URL + "Authenticate/register",
    data,
    "POST",
    false
  );

  if (!response.ok) {
    const awaitedRes = JSON.parse(await response.text());
    return [false, { message: awaitedRes.message, errors: awaitedRes.errors }];
  }

  return [true, null];
};

export const createItem = async (userId, title, description) => {
  const data = {
    userId: userId,
    title: title,
    description: description,
  };

  const response = await fetchData(BASE_URL + "todo", data, "POST", true);

  if (!response.ok) {
    const awaitedRes = JSON.parse(await response.text());
    return [null, { message: awaitedRes.message, errors: awaitedRes.errors }];
  }

  const body = JSON.parse(await response.text());
  const todo = parseToTodoItem(body);
  return [todo, null];
};

export const deleteItem = async (id) => {
  const response = await fetchData(
    BASE_URL + "todo/" + id,
    null,
    "DELETE",
    true
  );

  if (!response.ok) {
    const awaitedRes = JSON.parse(await response.text());
    return [false, { message: awaitedRes.message, errors: awaitedRes.errors }];
  }

  return [true, null];
};

export const getItems = async (id) => {
  const response = await fetchData(BASE_URL + "todo/" + id, {}, "Get", true);

  if (!response.ok) {
    const awaitedRes = JSON.parse(await response.text());
    return [false, { message: awaitedRes.message, errors: awaitedRes.errors }];
  }

  const body = JSON.parse(await response.text());
  const todos = parseToTodos(body);
  return [true, todos];
};

const fetchData = async (url, data, method = "Get", addToken = true) => {
  let headers = {
    "Content-Type": "application/json",
  };
  if (addToken) {
    const token = localStorage.getItem(TOKEN);
    headers = { ...headers, Authorization: "Bearer " + token };
  }

  const response =
    method !== "Get"
      ? await fetch(url, {
          method: method,
          headers: headers,
          body: JSON.stringify(data),
        })
      : await fetch(url, {
          method: method,
          headers: headers,
        });

  return response;
};

const parseToUser = (data) => {
  const todos = parseToTodos(data.todos);

  const user = new UserModel(data.id, data.userName, todos, data.email);

  return user;
};

const parseToTodoItem = (todo) => {
  return new TodoModel(todo.title, todo.description, todo.todoId, todo.userId);
};

const parseToTodos = (todos) => {
  return todos.map((todo) => {
    return parseToTodoItem(todo);
  });
};
