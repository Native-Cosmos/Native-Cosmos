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
          <img style={{ borderRadius: "50%" }} src="finalLogo.png" alt="Logo" />
        </div>
        <div className="menu">
          <p>
            <a href="#">Home</a>
          </p>
          <p>
            <a href="#about">About</a>
          </p>
          <p>
            {" "}
            <a href="#faq">FAQ</a>
          </p>
          <p>
            <a href="#team">Team</a>
          </p>
          <p>
            <a href="#contact">ContactUs</a>
          </p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
