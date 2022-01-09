import { useState } from "react";

const Content = () => {
  const [name, setName] = useState("User");

  const handleUsername = () => {
    const usernames = ["Desidério", "Alis", "Sera"];
    const index = Math.floor(Math.random() * 3);
    setName(usernames[index]);
  }

  const buttonStyles = {
    margin: ".2rem",
    padding: "1rem 2rem",
    background: "orange",
    color: "#222",
    fontWeight: "bold",
    border: "none",
    cursor: "pointer"
  }

  const handleClick = () => {
    alert("You clicked the button!");
  }

  return (
    <main className="main">
      <p>Welcome, {name}!</p>
      <button style={buttonStyles} onClick={handleUsername}>Change username</button> <br />
      <button style={buttonStyles} onClick={handleClick}>Click me!</button>
    </main>
  )
}

export default Content;
