import { useState } from "react";
import "./App.css";
import Title from "./components/Title";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);

  const [input, setInput] = useState("");

  const [editIndex, setEditIndex] = useState(-1);

  return (
    <div className="container">
      <div className="app-wrapper">
        <Title />
        <TodoForm
          todo={todo}
          setTodo={setTodo}
          input={input}
          setInput={setInput}
          editIndex={editIndex}
          setEditIndex={setEditIndex}
        />
        <TodoList
          todo={todo}
          setTodo={setTodo}
          setInput={setInput}
          setEditIndex={setEditIndex}
        />
      </div>
    </div>
  );
}

export default App;
