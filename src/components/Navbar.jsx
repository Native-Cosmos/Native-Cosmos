import React from 'react';
import '../css/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        {/* <img src="logo.png" alt="Logo" /> */}
        <p>logo</p>
      </div>
      <div className="menu">
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#themes">Themes</a></li>
          <li><a href="#sponsors">Sponsors</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
