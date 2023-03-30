import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="header">
      <div class="logo">
        <img src="bmonroe-logo.png" alt="B. Monroe Logo" />
      </div>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <Link className="main-nav-link" href="#">
            HOME
          </Link>
          <Link className="main-nav-link" href="#">
            WHAT WE DO
          </Link>
          <Link className="main-nav-link" href="#">
            SERVICES
          </Link>
          <Link className="main-nav-link" href="#">
            ABOUT
          </Link>
          <Link className="main-nav-link nav-cta" href="#">
            CONTACT
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
