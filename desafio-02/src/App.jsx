import Menu from "./components/Menu";
import List from "./components/List";
import Table from "./components/Table";
import { useState, useEffect } from "react";


function App() {
  const API_URL = "https://jsonplaceholder.typicode.com";

  const [selectedButton, setSelectedButton] = useState("users");
  const [fetchedData, setFetchedData] = useState([]);

  useEffect(() => {
    const fecthApi = async () => {
      try {
        const response = await fetch(`${API_URL}/${selectedButton}`);
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
      <Menu selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
      <Table data={fetchedData} />
    </div>
  )
}

export default App;
