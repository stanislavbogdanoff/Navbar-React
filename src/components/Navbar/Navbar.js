import React, { useState } from 'react';
import { MenuList } from './MenuList';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [clicked, setClicked] = useState(false)

  const menu = MenuList.map(({ title, url }, index) => {
    return (
      <li key={index}>
        <NavLink to={url} activeclassname="active">{title}</NavLink>
      </li>
    )
  })

  const handleClick = () => {
    setClicked(!clicked)
  }

  return (
    <nav>
      <div className="logo">
        VPN<font>Lab</font>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={ clicked ? "fas fa-times fa-2x" : "fas fa-bars fa-2x"} ></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>
        { menu }
      </ul>
    </nav>
  )
}

export default Navbar;
