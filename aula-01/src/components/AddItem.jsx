import { FaPlus } from "react-icons/fa";

const AddItem = ({ onSubmit }) => {
  return (
    <form className="item-form" onSubmit={onSubmit}>
      <label htmlFor="addItem">Add item</label>
      <input
        id="addItem"
        autoFocus
        required
        type="text"
        placeholder="Add item"
      />
      <button aria-label="Add item">
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem;
