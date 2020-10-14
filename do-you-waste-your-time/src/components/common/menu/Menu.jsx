import React from 'react'
import { Link } from 'react-router-dom';
import './Menu.scss';

function Menu() {
  function closeMenu() {
    document.getElementById("menu-div").style.width = "0%";
    document.body.style.overflow = "auto";
  }

  return (
    <div id="menu-div" className="overlay">
      <button className="closebtn" onClick={closeMenu}>&times;</button>
      <div className="overlay-content">
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/advices" onClick={closeMenu}>Time management advices</Link>
        <Link to="/test" onClick={closeMenu}>Take a test</Link>
        <Link to="/day-timer" onClick={closeMenu}>Day timer</Link>
        <Link to="/contact-us" onClick={closeMenu}>Contact Us</Link>
      </div>
    </div>
  );
}

export default Menu;