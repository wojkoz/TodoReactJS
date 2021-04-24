import "./App.css";
import CreateTodoItem from "./components/CreateTodoItem";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";
import { addItem, deleteItem, getItems } from "./repository/Repository.js";

function App() {

  const [isUserLogged, setIsUserLogged] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const list = getItems(isUserLogged);
    setItems(list);
  },[]);

  const addTodoItem = (title, desc) => {
    const list = addItem(title, desc, isUserLogged);
    setItems(list);
  };

  const deleteTodoItem = (id) => {
    const list = deleteItem(id, isUserLogged);
    setItems(list);
  };

  return (
    <div className="main-div">
      <div className="center">
        <h1 id="title">Todo list</h1>
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
