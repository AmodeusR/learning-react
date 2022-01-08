const Content = () => {
  const handleUsername = () => {
    return "Desidério";
  }

  const buttonStyles = {
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
      <p>Hello, {handleUsername()}</p>
      <button style={buttonStyles} onClick={handleClick}>Click me!</button>
    </main>
  )
}

export default Content;
