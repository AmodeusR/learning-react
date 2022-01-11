import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

    const [items, setItems] = useState([{
      id: 1,
      checked: false,
      description: "Chocolate"
    },
    {
      id: 2,
      checked: false,
      description: "Candy"
    },
    {
      id: 3,
      checked: false,
      description: "Cookies"
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
    
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
    setItems(listItems);
  }

  const handleDelete = id => {
    const listItems = items.filter(item => item.id !== id);
    
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
    setItems(listItems);
  }

  return (
    <div className="App">
      <Header title="Groceries" />
      <Content
        items={items}
        onCheck={handleCheck}
        onDelete={handleDelete}
      />
      <Footer totalItems={items.length} />
    </div>
  );
}

export default App;
