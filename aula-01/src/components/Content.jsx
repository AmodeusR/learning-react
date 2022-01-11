import { FaTrashAlt } from "react-icons/fa";

const Content = ({ items, onCheck, onDelete }) => {
  const emptyListStyle = {
    fontSize: "2rem",
    fontWeight: "bold"
  };

  return (
    <main className="main">
        {items.length ? null : <p style={emptyListStyle}>There is nothing here 👀</p>}
      <ul className="list">
        {items.map(({id, checked, description}) => {
          return (
            <li key={id} className="list-item">
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
                tabIndex="0"
                onClick={() => onDelete(id)}
              />
            </li>
          );
        })}
      </ul>
    </main>
  )
}

export default Content;
