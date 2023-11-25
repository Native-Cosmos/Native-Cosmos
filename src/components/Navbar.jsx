import React, { useState, useEffect } from "react";
import "../css/Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);

  const transitionNavbar = (e) => {
    if (window.scrollY) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => {
      window.removeEventListener("scroll", transitionNavbar);
    };
  }, []);

  return (
    <nav className={`navbar ${show && "nav_black"}`}>
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#themes">Themes</a>
          </li>
          <li>
            <a href="#sponsors">Sponsors</a>
          </li>
          <li>
            <a href="#team">Team</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
