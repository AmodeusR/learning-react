import React from 'react';

function Button({ selectedButton, buttonText }) {
  const checkClick = () => {
    console.table([selectedButton, buttonText.toLowerCase()]);
    console.log(selectedButton === buttonText.toLowerCase() ? "selected" : null);
  }

  return (
    <button
      type="button"
      className={selectedButton === buttonText.toLowerCase() ? "selected" : null}
    >
      {buttonText}
    </button>
  )
}

export default Button;