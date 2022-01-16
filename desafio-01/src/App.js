import { useState } from "react";
import ColorInput from "./Components/ColorInput";
import ColorDisplayer from "./Components/ColorDisplayer";

function App() {
  const [color, setColor] = useState("");

  return (
    <div className="App">
      <main className="main-section">
      <ColorDisplayer color={color} />
      <ColorInput color={color} setColor={setColor} />
      </main>
    </div>
  );
}

export default App;
