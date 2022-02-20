import React from 'react';
import {FaLaptop, FaTabletAlt, FaMobileAlt} from "react-icons/fa";
import { useContext } from "react";
import DataContext from '../context/DataContext';
import  useWindowSize from "../hooks/useWindowSize";

const Header = ({ title }) => {
  const { width: windowWidth } = useWindowSize();

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