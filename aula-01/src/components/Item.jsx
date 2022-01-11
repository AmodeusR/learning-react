import { FaTrashAlt } from "react-icons/fa";


const item = ({ id, checked, description, onCheck, onDelete}) => {
  return (
    <li className="list-item">
      <input
        className="input-checkbox"
        onChange={() => onCheck(id)}
        type="checkbox"
        name="selected-car"
        id={id}
        checked={checked}
      />
      <label  style={checked ? {textDecoration: "line-through"} : null} htmlFor={id}>{description}</label>
    
      <FaTrashAlt
        role="button"
        aria-label={`Delete ${description}`}
        tabIndex="0"
        onClick={() => onDelete(id)}
      />
    </li>
  )
}

export default item;