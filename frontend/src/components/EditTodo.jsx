import PropTypes from "prop-types";

const EditTodo = ({
  isOpen,
  onClose,
  selectedTodo,
  setSelectedTodo,
  handleUpdate,
}) => {
  const handleChange = (e) => {
    e.preventDefault();

    setSelectedTodo({
      ...selectedTodo,
      name: e.target.value,
    });
  };

  const handleSave = async () => {
    await handleUpdate(selectedTodo.id, { name: selectedTodo.name });
    onClose();
  };

  return (
    <div>
      <dialog
        open={isOpen}
        onClose={onClose}
        className="w-96 p-5 bg-slate-300 -my-96 mx-auto rounded-xl shadow-xl "
      >
        <form className="flex flex-col">
          <h3 className="font-bold text-lg text-black mb-5">Edit Todo</h3>
          <input
            type="text"
            className="px-12 py-3 rounded-bround bg-white"
            value={selectedTodo.name}
            onChange={handleChange}
          />
          <div className="self-end mt-5">
            <button
              type="button"
              className="bg-black text-white p-3 rounded-bround"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSave}
              className="border-none outline-none p-3 ml-2 bg-orbg text-white rounded-bround"
            >
              Save Changes
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
};

EditTodo.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  selectedTodo: PropTypes.object,
  setSelectedTodo: PropTypes.func,
  handleUpdate: PropTypes.func,
};

export default EditTodo;
