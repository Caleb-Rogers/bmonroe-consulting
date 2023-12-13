import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = ({ visible }) => {
  const router = useRouter();
  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <header className={`header ${visible ? "visible" : "hidden"}`}>
      <div className="logo-nav" onClick={handleLogoClick}>
        Monroe Consulting
      </div>
      <input type="checkbox" className="toggle-menu"></input>
      <div className="hamburger"></div>
      <nav className="main-nav">
        <ul className="main-nav-list">
          <Link className="main-nav-link" href="/">
            HOME
          </Link>
          <Link className="main-nav-link" href="/about">
            ABOUT
          </Link>
          <Link className="main-nav-link" href="/services">
            SERVICES
          </Link>
          <Link className="main-nav-link nav-cta" href="/contact">
            CONTACT
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
