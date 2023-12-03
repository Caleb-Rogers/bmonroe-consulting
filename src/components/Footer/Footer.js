import React from "react";
import Link from "next/link";

function Footer({ backgroundColor }) {
  return (
    <section className="foot-sec" style={{ backgroundColor: backgroundColor }}>
      <div className="foot-container">
        <div className="foot-row">
          <div className="foot-col first-col">
            <h3>Services</h3>
            <ul>
              <li>
                <a href="/services">Zoning, Land Use, & Research</a>
              </li>
              <li>
                <a href="/services">Code Enforcement</a>
              </li>
              <li>
                <a href="/services">Design</a>
              </li>
              <li>
                <a href="/services">
                  Environment Permitting & Meeting Representation
                </a>
              </li>
              <li>
                <a href="/services">Energy Analysis</a>
              </li>
              <li>
                <a href="/services">Land management</a>
              </li>
            </ul>
          </div>
          <div className="foot-col second-col">
            <h3>About</h3>
            <ul>
              <li>
                <a href="/about">Barb Monroe</a>
              </li>
              <li>
                <a href="/about">Experience</a>
              </li>
              <li>
                <a href="/about">Career Archives</a>
              </li>
              <li>
                <a href="/about">Connections</a>
              </li>
              <li>
                <a href="/about">Personal Development</a>
              </li>
            </ul>
          </div>
          <div className="foot-col third-col">
            <h3>Monroe Consulting</h3>
            <p>
              Receive professional expertise on project management and
              delegate your legal work such as processing building permits,
              verifying building code & regulations, and performing safety &
              efficiency tests
            </p>
          </div>
        </div>
        <div className="foot-row">
          <div className="socials">
            <Link href="https://www.linkedin.com/in/barbara-monroe-6088439a/" target="_blank"><img src="linkedin-500-yellow.png" alt="LinkedIn Icon" /></Link>
            <Link href="https://www.facebook.com/barb.monroe.18" target="_blank"><img src="facebook-500-yellow.png" alt="Facebook Icon" /></Link>
          </div>
        </div>
        <div className="foot-row">
          <p>Monroe Consulting © 2023</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
