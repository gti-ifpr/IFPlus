import React from 'react';
import {Link} from 'react-router-dom';
import "./menu.css";
import logo from "./../../../img/iflogo.png"

const Menu = ({ items }) => {
  return (
    <>
      <ul className="menu">
        <img className='menuLogo' src={logo} alt="Logo do IF"/>
        {items.map((items, index) => (
        <li key={index}>
          <Link to={items.link}>{items.text}</Link>
        </li>
      ))}
      </ul>
    </>
  );
};

export default Menu;