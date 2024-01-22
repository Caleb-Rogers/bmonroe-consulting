import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="foot-container">
        <ul className="foot-icons">
          <li className="foot-icon-item">
            <a className="foot-icon" href="https://www.linkedin.com/in/barbara-monroe-6088439a"><img className="foot-icon-img" src="linkedin-icon-blue.png" alt="Blue LinkedIn Icon" /></a>
          </li>
          <li className="foot-icon-item">
            <a className="foot-icon" href="https://www.facebook.com/profile.php?id=100067359234865"><img className="foot-icon-img" src="facebook-icon-blue.png" alt="Blue Facebook Icon" /></a>
          </li>
        </ul>
        <ul className="foot-nav">
          <li className="foot-nav-item"><a className="foot-nav-link" href="/">Home</a></li>
          <li className="foot-nav-item"><a className="foot-nav-link" href="/about">About</a></li>
          <li className="foot-nav-item"><a className="foot-nav-link" href="/services">Services</a></li>
          <li className="foot-nav-item"><a className="foot-nav-link" href="/contact">Contact</a></li>
        </ul>
        <p className="foot-nav-text">@2024 Monroe Consulting | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
