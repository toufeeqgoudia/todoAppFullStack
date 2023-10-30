import { useState, useEffect } from "react";
import TodoList from "./components/ToDoList";
import TodoForm from "./components/TodoForm";
import imgIcon from "./assets/images/icon.png"
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("/api/todos/")
      .then((res) => {
        setTodos(res.data)
      })
      .catch(() => {
        "Something went wrong :("
      })
  }, [])

  return (
    <div className="w-full">
      <div className="flex justify-between items-center py-10">
        <h1 className="text-4xl font-extrabold text-white">Full Stack Todo App</h1>
        <img src={imgIcon} alt="To Do Icon" className="w-10" />
      </div>
      <div className="max-w-xl w-full bg-white p-5 rounded-xl ">
        <TodoForm />
        <TodoList todos={todos} />
      </div>
    </div>
  );
};

export default App;
