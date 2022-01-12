import Header from "./components/Header";
import SearchItem from "./components/SearchItem";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const itemsList = JSON.parse(localStorage.getItem("shoppingList")) ?? [];
 
  const [items, setItems] = useState(itemsList);
  const [searchItem, setSearchItem] = useState("");


  const setAndSaveItems = (newItemsList) => {
    localStorage.setItem("shoppingList", JSON.stringify(newItemsList));
    setItems(newItemsList);
  }
 
  const handleSubmission = e => {
    e.preventDefault();
    const itemText = e.target.children[1].value;
    const newItem = {
      id: items.length + 1,
      checked: false,
      description: itemText
    }

    const itemsList = [...items];
    itemsList.push(newItem)
    
    setAndSaveItems(itemsList);
    e.target.children[1].value = "";
  }

  const handleCheck = (id) => {
    const itemsList = items.reduce((acc, item) => {
      if (item.id === id) {
        item.checked = item.checked === true ? false : true;
        acc.push(item);
        return acc;
      } else {
        acc.push(item);
        return acc;
      }
    }, []);
    
    setAndSaveItems(itemsList);
  }

  const handleDelete = id => {
    const itemsList = items.filter(item => item.id !== id);
    
    setAndSaveItems(itemsList);
  }

  return (
    <div className="App">
      <Header title="Lista de coisas aleatórias" />
      <AddItem onSubmit={handleSubmission} />
      <SearchItem
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      />
      <Content
        items={items.filter(item => (item.description.toLowerCase()).includes(searchItem.toLowerCase()))}
        onCheck={handleCheck}
        onDelete={handleDelete}
      />
      <Footer totalItems={items.length} />
    </div>
  );
}

export default App;
