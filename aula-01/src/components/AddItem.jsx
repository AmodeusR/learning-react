import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ onSubmit, newItemText, setNewItemText }) => {
  const inputRef = useRef();
  
  return (
    <form className="item-form" onSubmit={onSubmit}>
      <label htmlFor="addItem">Add item</label>
      <input
        id="addItem"
        type="text"
        ref={inputRef}
        placeholder="Add item"
        value={newItemText}
        onChange={(e) => setNewItemText(e.target.value)}
        autoFocus
        required
      />
      <button aria-label="Add item" onClick={(e) => {inputRef.current.focus()}}>
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem;
