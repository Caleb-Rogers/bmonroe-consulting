// Navbar.js

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  useEffect(() => {
    const handleHamburgerClick = () => {
      document.body.classList.toggle('nav-open');
    };

    const handleNavLinkClick = (path) => {
      document.body.classList.remove('nav-open');
      setTimeout(() => {
        router.push(path);
      }, 300);
    };

    document.querySelector('.hamburger').addEventListener('click', handleHamburgerClick);

    document.querySelectorAll('.nav-menu-link').forEach((link) => {
      const path = link.getAttribute("href");
      link.addEventListener('click', (e) => {
        e.preventDefault();
        handleNavLinkClick(path);
      });
    });

    return () => {
      document.querySelector('.hamburger').removeEventListener('click', handleHamburgerClick);

      document.querySelectorAll('.nav-menu-link').forEach((link) => {
        link.removeEventListener('click', (e) => {
          e.preventDefault();
          handleNavLinkClick(link.getAttribute("href"));
        });
      });
    };
  }, [router]);

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
          <ul className="nav-menu-list">
            <Link className="nav-menu-link" href="/">
              HOME
            </Link>
            <Link className="nav-menu-link" href="/about">
              ABOUT
            </Link>
            <Link className="nav-menu-link" href="/services">
              SERVICES
            </Link>
            <Link className="nav-menu-link" href="/contact">
              CONTACT
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
