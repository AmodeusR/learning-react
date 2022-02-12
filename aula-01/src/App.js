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
  const [newItemText, setNewItemText] = useState("");
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
  
 
  const handleSubmission = async (e) => {
    e.preventDefault();

    const newItem = {
      id: items.length + 1,
      checked: false,
      description: newItemText
    }

    const itemsList = [...items];
    itemsList.push(newItem)
    
    setItems(itemsList);
    setNewItemText("");

    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newItem)
    }

    const result = await apiRequest(API_URL, postOptions);
    if (result) setFetchError(result);

  }

  const handleCheck = async (id) => {
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

    const toUpdateItem = itemsList.filter(item => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({checked: toUpdateItem[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  }

  const handleDelete = async (id) => {
    const itemsList = items.filter(item => item.id !== id);
    
    setItems(itemsList);

    const deleteOptions = { method: "DELETE" };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
  }

  return (
    <div className="App">
      <Header title="Lista de coisas aleatórias" />
      <AddItem onSubmit={handleSubmission} newItemText={newItemText} setNewItemText={setNewItemText} />
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
