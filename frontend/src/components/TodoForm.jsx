import { useState } from "react";

const TodoForm = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    setName(e.target.value);
  };

  return (
    <form className="flex items-center justify-between bg-inbg rounded-bround mb-9">
      <input
        className="flex-1 border-none outline-none px-12 py-3 bg-transparent"
        placeholder="Add To Do"
        value={name}
        onChange={handleSubmit}
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

export default TodoForm;
