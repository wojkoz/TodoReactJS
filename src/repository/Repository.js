import { loadFromLocalStorage, saveToLocalStorage } from "./LocalRepository";
import TodoModel from "../models/TodoModel";
import {
  login,
  register,
  createItem,
  deleteItem as remoteDeleteItem,
  getItems as remoteGetItems,
} from "./RemoteRepository";

export { login as loginUser, register as registerUser };

export const addItem = async (title, desc, userData, items) => {
  let updatedList = null;
  if (userData.logged) {
    const [todo] = await createItem(userData.user.id, title, desc);
    updatedList = [...items, todo];
    saveToLocalStorage(updatedList, userData.user.userName);
  } else {
    const newItem = new TodoModel(title, desc);
    updatedList = [...items, newItem];
    saveToLocalStorage(updatedList);
  }

  return updatedList;
};

export const deleteItem = async (id, userData, items) => {
  let isDeleted = null;
  let updatedList = null;

  if (userData.logged) {
    isDeleted = await remoteDeleteItem(userData.user.id, id);
    if (!isDeleted[0]) {
      return items;
    }
    updatedList = items.filter((item) => item.todoId !== id);
    saveToLocalStorage(updatedList, userData.user.userName);
    return updatedList;
  }

  updatedList = items.filter((item) => item.todoId !== id);
  saveToLocalStorage(updatedList);
  return updatedList;
};

export const getItems = async (
  isUserLogged,
  userId = null,
  userName = null
) => {
  if (isUserLogged) {
    const [succeded, todos] = await remoteGetItems(userId);
    if (succeded) {
      if (userName !== null) {
        saveToLocalStorage(todos, userName);
      }
      return todos;
    }
    return loadFromLocalStorage(userName);
  } else {
    return loadFromLocalStorage();
  }
};
