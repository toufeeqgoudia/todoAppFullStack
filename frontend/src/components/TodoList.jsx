import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider } from "@mui/material";
import PropTypes from "prop-types";
import checked from "../assets/images/checked.png";
import unchecked from "../assets/images/unchecked.png";
import axios from "axios";
import EditTodo from "./EditTodo";

const TodoList = ({ todos, setTodos }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const url = import.meta.env.VITE_API_URL

  const handleUpdate = async (id, value) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, ...value }; // Merge the updated values
      }
      return todo;
    });
    setTodos(newTodos); // Update the UI immediately

    try {
      const res = await axios.patch(`${url}/${id}/`, value);
      const { data } = res;
      const updatedTodos = newTodos.map((todo) =>
        todo.id === id ? data : todo
      );
      setTodos(updatedTodos); // Update the UI with the response from the server
    } catch (error) {
      console.log("Error updating the todo.", error);
    }
  };

  const handleEdit = (todo) => {
    setSelectedTodo(todo);
    setDialogOpen(true);
  };

  const handleDialog = () => {
    setDialogOpen(false);
    setSelectedTodo(null);
  };

  const handleDelete = (id) => {
    axios
      .delete(`${url}/${id}`)
      .then(() => {
        const newTodos = todos.filter((todo) => {
          return todo.id !== id;
        });
        setTodos(newTodos);
      })
      .catch(() => {
        console.log("Error deleting the todo");
      });
  };

  const incompleteTodos = todos.filter((todo) => todo.completed === false);
  const completedTodos = todos.filter((todo) => todo.completed === true);

  return (
    <div>
      {selectedTodo && (
        <EditTodo
          isOpen={dialogOpen}
          onClose={handleDialog}
          selectedTodo={selectedTodo}
          setSelectedTodo={setSelectedTodo}
          handleUpdate={handleUpdate}
        />
      )}

      {/** Incompleted Todos */}
      {incompleteTodos.length > 0 && (
        <h4 className="font-semibold mb-2">
          Incompleted Todos ({incompleteTodos.length}):
        </h4>
      )}
      <ul>
        {incompleteTodos.map((todo) => (
          <div key={todo.id} className="">
            <li className="py-2 flex justify-between items-center list-none">
              <div className="flex justify-between items-center">
                <span
                  onClick={() => {
                    handleUpdate(todo.id, { completed: !todo.completed });
                  }}
                >
                  {todo.completed === true ? (
                    <img src={checked} className="w-5" />
                  ) : (
                    <img src={unchecked} className="w-5" />
                  )}
                </span>
                <p className="pl-3">{todo.name}</p>
              </div>
              <div className="flex justify-between items-center">
                <EditIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleEdit(todo)}
                />
                <DeleteIcon
                  sx={{ cursor: "pointer", marginLeft: "20px" }}
                  color="error"
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                />
              </div>
            </li>
            <Divider />
          </div>
        ))}
      </ul>

      {/** Completed Todos */}
      {completedTodos.length > 0 && (
        <h4 className="font-semibold mb-2 mt-10">
          Completed Todos ({completedTodos.length}):
        </h4>
      )}
      <ul>
        {completedTodos.map((todo) => (
          <div key={todo.id} className="">
            <li className="py-2 flex justify-between items-center list-none">
              <div className="flex justify-between items-center">
                <span
                  onClick={() => {
                    handleUpdate(todo.id, { completed: !todo.completed });
                  }}
                >
                  {todo.completed === true ? (
                    <img src={checked} className="w-5" />
                  ) : (
                    <img src={unchecked} className="w-5" />
                  )}
                </span>
                <p className="pl-3">{todo.name}</p>
              </div>
              <div className="flex justify-between items-center">
                <EditIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => handleEdit(todo)}
                />
                <DeleteIcon
                  sx={{ cursor: "pointer", marginLeft: "20px" }}
                  color="error"
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                />
              </div>
            </li>
            <Divider />
          </div>
        ))}
      </ul>
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};

export default TodoList;
