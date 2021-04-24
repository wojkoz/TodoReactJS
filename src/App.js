import "./App.css";
import CreateTodoItem from "./components/CreateTodoItem";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import { addItem, deleteItem, getItems } from "./repository/Repository.js";
import Login from "./components/Login";

function App() {
  const [userData, setUserData] = useState({ logged: false, user: {} });
  const [items, setItems] = useState([]);
  useEffect(() => {
    const list = getItems(false);
    setItems(list);
  }, []);

  const setUser = (user) => {
    if (user.id !== undefined) {
      setUserData({ logged: true, user: user });
    }
  };

  const addTodoItem = (title, desc) => {
    const list = addItem(title, desc, userData.logged);
    setItems(list);
  };

  const deleteTodoItem = (id) => {
    const list = deleteItem(id, userData.logged);
    setItems(list);
  };

  return (
    <div className="main-div">
      <div className="center">
        <h1>Login</h1>
        <Login setUserLoggedCallback={setUser}></Login>
      </div>
      <div className="center">
        <h1 id="title">Todo list</h1>
      </div>
      <div className="center">
        <CreateTodoItem addItemFn={addTodoItem}></CreateTodoItem>
      </div>
      <div>
        <TodoList items={items} deleteItemCallback={deleteTodoItem}></TodoList>
      </div>
    </div>
  );
}

export default App;
