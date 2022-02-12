import React from "react";

function Menu({ setSelectedButton }) {
  const handleButtonClick = e => {
    setSelectedButton(e.target.textContent.toLowerCase());
  }

  return (
    <nav className="menu" onClick={e => handleButtonClick(e)}>
      <button type="button">Users</button>
      <button type="button">Posts</button>
      <button type="button">Comments</button>
    </nav>
  )
}

export default Menu;