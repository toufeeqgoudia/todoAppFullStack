import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider } from "@mui/material";
import PropTypes from "prop-types";

const TodoList = ({ todos }) => {


  return (
    <div>
      <ul >
        {todos.map((todo) => (
          <div  key={todo.name}>
          <li className=" flex justify-between items-center list-none">
            <div className="flex justify-between items-center">
              <Checkbox sx={{ cursor: "pointer" }} />
              <p className="pl-3">{todo.name}</p>
            </div>
            <div className="flex justify-between items-center">
              <EditIcon sx={{ cursor: "pointer" }} />
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
    </div>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array,
};

export default TodoList;
