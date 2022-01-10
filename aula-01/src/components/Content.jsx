import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {
  const [items, setItems] = useState([{
      id: 1,
      checked: false,
      description: "Lexus LFA"
    },
    {
      id: 2,
      checked: false,
      description: "Lotus Exige S"
    },
    {
      id: 3,
      checked: false,
      description: "Jaguar Type-R"
    }
  ]);

  const handleCheck = (id) => {
    const listItems = items.reduce((acc, item) => {
      if (item.id === id) {
        item.checked = item.checked === true ? false : true;
        acc.push(item);
        return acc;
      } else {
        acc.push(item);
        return acc;
      }
    }, []);
    
    setItems(listItems);
  }

  return (
    <main className="main">
      <ul className="list">
        {items.map(item => {
          return (
            <li key={item.id} className="list-item">
              <input
                className="input-checkbox"
                onChange={() => handleCheck(item.id)}
                type="checkbox"
                name="selected-car"
                id={item.id}
                checked={item.checked}
              />
              <label htmlFor={item.id}>{item.description}</label>
              <FaTrashAlt
                role="button"
                tabIndex="0"
              />
            </li>
          );
        })}
      </ul>
    </main>
  )
}

export default Content;
