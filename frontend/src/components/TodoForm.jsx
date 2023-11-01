import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

const TodoForm = ({ todos, setTodos }) => {
  const [name, setName] = useState("");

  const url = import.meta.env.VITE_API_URL

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please provide a valid todo");
      return;
    }

    axios
      .post(`${url}`, {
        name: name,
      })
      .then((res) => {
        setName("");
        const { data } = res;
        setTodos([...todos, data]);
      })
      .catch(() => {
        console.log("Something went wrong when adding todo!");
      });
  };

  return (
    <form
      className="flex items-center justify-between bg-inbg rounded-bround mb-9"
      onSubmit={handleSubmit}
    >
      <input
        className="flex-1 border-none outline-none px-12 py-3 bg-transparent"
        placeholder="Add To Do"
        value={name}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="border-none outline-none px-12 py-3 bg-orbg text-white rounded-bround"
      >
        Add
      </button>
    </form>
  );
};

TodoForm.propTypes = {
  todos: PropTypes.array,
  setTodos: PropTypes.func,
};

export default TodoForm;
