import { FaPlus } from "react-icons/fa";
import { useRef } from "react";

const AddItem = ({ onSubmit }) => {
  const inputRef = useRef();
  
  return (
    <form className="item-form" onSubmit={onSubmit}>
      <label htmlFor="addItem">Add item</label>
      <input
        id="addItem"
        autoFocus
        ref={inputRef}
        required
        type="text"
        placeholder="Add item"
      />
      <button aria-label="Add item" onClick={(e) => {inputRef.current.focus()}}>
        <FaPlus />
      </button>
    </form>
  )
}

export default AddItem;
