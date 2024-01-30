import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="logo">
          <img
            style={{ borderRadius: "50%" }}
            src="nativecosmos.png"
            alt="Logo"
          />
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
            {/* <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/faq">FAQ</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
