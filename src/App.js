import './App.css';
import TodoList from './components/TodoList';
import TodoModel from './models/TodoModel';

function App() {
  const items = [new TodoModel("title", "desc"), new TodoModel("title two", "desc two"), new TodoModel("title three", "desc three"), new TodoModel("title four", "desc four")];
  return (
    <div className="main-div">
      <div className="center">
        <h1 id="title">Todo list</h1>
      </div>
      <div>
        <TodoList items={items}></TodoList>
      </div>
    </div>
  );
}

export default App;
