import React from 'react';
import {FaLaptop, FaTabletAlt, FaMobileAlt} from "react-icons/fa";

const Header = ({ title, windowWidth }) => {
  return (
    <header className='Header'>
      <h1>{title}</h1>
      {
        windowWidth < 435 ? <FaMobileAlt /> : 
        windowWidth < 768 ? <FaTabletAlt /> :
        <FaLaptop />
      }
    </header>
  );
}

export default Header;