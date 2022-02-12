import Menu from "./components/Menu";
import List from "./components/List";
import { useState, useEffect } from "react";


function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";

  const [selectedButton, setSelectedButton] = useState("");
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fecthApi = async () => {
      try {
        const response = selectedButton ? await fetch(`${API_URL}/${selectedButton}`) : await fetch(`${API_URL}/users`);
        const data = await response.json();
        setFetchedData(data);
        
        if (!response.ok) throw new Error("Couldn't get to API");
      } catch (err) {
        console.error(err);
      }

    }

    fecthApi();
  }, [selectedButton]);

  return (
    <div className="App">
      <Menu setSelectedButton={setSelectedButton} />
      <List fetchedData={fetchedData} />
    </div>
  )
}

export default App;
