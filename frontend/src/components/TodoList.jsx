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

  const url = "http://localhost:8000/api/todos";

  const handleUpdate = async (id, value) => {
    return axios
      .patch(`${url}/${id}/`, value)
      .then((res) => {
        const { data } = res;
        const newTodos = todos.map((todo) => {
          if (todo._id === id) {
            return data;
          } else {
            return todo;
          }
        });
        setTodos(newTodos);
      })
      .catch(() => {
        console.log("Something went wrong.");
      });
  };

  const handleEdit = (todo) => {
    setSelectedTodo(todo);
    setDialogOpen(true);
  };

  const handleDialog = () => {
    setDialogOpen(false);
    setSelectedTodo(null);
  };

  return (
    <div>
      <ul>
        {todos.map((todo) => (
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
                />
              </div>
            </li>
            <Divider />
          </div>
        ))}
      </ul>
      {selectedTodo && (
        <EditTodo
          isOpen={dialogOpen}
          onClose={handleDialog}
          selectedTodo={selectedTodo}
          setSelectedTodo={setSelectedTodo}
          handleUpdate={handleUpdate}
        />
      )}
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};

export default TodoList;
