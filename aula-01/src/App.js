import Header from "./components/Header";
import SearchItem from "./components/SearchItem";
import AddItem from "./components/AddItem";
import Content from "./components/Content";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import apiRequest from "./components/apiRequest";


function App() {
  const API_URL = "http://localhost:3500/items";
 
  const [items, setItems] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Did not receive expected data.");
        const data = await response.json();
        
        setItems(data);
        setFetchError(null);
      } catch(err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchItems();
  }, []);
  
 
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
    
    setItems(itemsList);
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
    
    setItems(itemsList);
  }

  const handleDelete = id => {
    const itemsList = items.filter(item => item.id !== id);
    
    setItems(itemsList);
  }

  return (
    <div className="App">
      <Header title="Lista de coisas aleatórias" />
      <AddItem onSubmit={handleSubmission} />
      <SearchItem
        searchItem={searchItem}
        setSearchItem={setSearchItem}
      />
      <main className="main">
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p className="error">Error: {fetchError}</p>}
        {!fetchError && !isLoading &&
          <Content
            items={items.filter(item => (item.description.toLowerCase()).includes(searchItem.toLowerCase()))}
            onCheck={handleCheck}
            onDelete={handleDelete}
        />}
      </main>
      <Footer totalItems={items.length} />
    </div>
  );
}

export default App;
