// Navbar.js

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {

  useEffect(() => {
    const handleHamburgerClick = () => {
      document.body.classList.toggle('nav-open');
    };

    document.querySelector('.hamburger').addEventListener('click', handleHamburgerClick);

    return () => {
      document.querySelector('.hamburger').removeEventListener('click', handleHamburgerClick);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo">Monroe Consulting</div>
      <div className="hamburger-pos">
        <div className="hamburger">
          <div className="line1"></div>
          <div className="line2"></div>
        </div>
      </div>
      <div className="nav-container">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="nav-sliders"></div>
        ))}
        <div className="nav-menu">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
