import { useState, useEffect } from "react";
import TodoList from "./components/ToDoList";
import TodoForm from "./components/TodoForm";
import imgIcon from "./assets/images/icon.png";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);

  const url = import.meta.env.VITE_API_URL

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get(url);
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, [url]);

  return (
    <div>
      <div className="flex justify-between items-center py-10">
        <h1 className="text-4xl font-extrabold text-white">
          Full Stack Todo App
        </h1>
        <img src={imgIcon} alt="To Do Icon" className="w-10" />
      </div>
      <div className="max-w-xl w-full bg-white p-5 rounded-xl">
        <TodoForm todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />
      </div>
    </div>
  );
};

export default App;
