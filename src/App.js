import "./App.css";
import CreateTodoItem from "./components/CreateTodoItem";
import TodoList from "./components/TodoList";
import TodoModel from "./models/TodoModel";
import { useState } from "react";

function App() {
  const sampleItems = [
    new TodoModel("title", "desc"),
    new TodoModel("title two", "desc two"),
    new TodoModel("title three", "desc three"),
    new TodoModel("title four", "lorem"),
    new TodoModel(
      "title four",
      "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
    ),
  ];

  const [items, setItems] = useState(sampleItems);

  const addItem = (title, desc) => {
    const newItem = new TodoModel(title, desc);

    setItems([...items, newItem]);
  };

  const deleteItem = (id) => {
    const itemsAfterDelete = items.filter((item) => item.id !== id);
    setItems(itemsAfterDelete);
  };

  return (
    <div className="main-div">
      <div className="center">
        <h1 id="title">Todo list</h1>
      </div>
      <div className="center">
        <CreateTodoItem addItemFn={addItem}></CreateTodoItem>
      </div>
      <div>
        <TodoList items={items} deleteItemCallback={deleteItem}></TodoList>
      </div>
    </div>
  );
}

export default App;
