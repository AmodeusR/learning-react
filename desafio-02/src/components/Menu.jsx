import React from "react";
import Button from "./Button";

function Menu({ selectedButton, setSelectedButton }) {
  const handleButtonClick = e => {
    setSelectedButton(e.target.textContent.toLowerCase());
  }

  return (
    <nav className="menu" onClick={e => handleButtonClick(e)}>
      <Button selectedButton={selectedButton} buttonText="Users" />
      <Button selectedButton={selectedButton} buttonText="Posts" />
      <Button selectedButton={selectedButton} buttonText="Comments" />
    </nav>
  )
}

export default Menu;