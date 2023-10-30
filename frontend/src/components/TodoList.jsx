import Checkbox from "@mui/material/Checkbox";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider } from "@mui/material";

const TodoList = () => {
  return (
    <div>
      <ul>

        <li className="flex justify-between items-center list-none">
          <div className="flex justify-between items-center">
            <Checkbox sx={{cursor: 'pointer'}} />
            <p className="pl-3">Wash the cat</p>
          </div>
          <div className="flex justify-between items-center">
            <EditIcon sx={{cursor: 'pointer'}} />
            <DeleteIcon sx={{cursor: 'pointer', marginLeft: '20px'}} color="error" />
          </div>
        </li>
        <Divider />

        <li className="flex justify-between items-center list-none">
          <div className="flex justify-between items-center">
            <Checkbox sx={{cursor: 'pointer'}} />
            <p className="pl-3">Clean the car</p>
          </div>
          <div className="flex justify-between items-center">
            <EditIcon sx={{cursor: 'pointer'}} />
            <DeleteIcon sx={{cursor: 'pointer', marginLeft: '20px'}} color="error" />
          </div>
        </li>
        <Divider />

      </ul>
    </div>
  );
};

export default TodoList;
