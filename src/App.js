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
    fetchItems();
    async function fetchItems() {
      const list = await getItems(
        userData.logged,
        userData.user.id,
        userData.user.userName
      );
      setItems(list);
    }
  }, [userData]);

  const setUser = (user) => {
    if (user.id !== undefined) {
      setUserData({ logged: true, user: user });
    } else {
      setUserData({ logged: false, user: {} });
    }
  };

  const addTodoItem = async (title, desc) => {
    const list = await addItem(title, desc, userData, items);
    setItems(list);
  };

  const deleteTodoItem = async (id) => {
    const list = await deleteItem(id, userData, items);
    setItems(list);
  };

  return (
    <div className="main-div">
      <div className="center">
        <h1>{userData.logged ? userData.user.userName : "Login"}</h1>
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
