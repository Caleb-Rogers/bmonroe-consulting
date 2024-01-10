// AboutSection.js

import React from "react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-sec-container">
        <div className="about-sec-text">
          <h2 className="about-sec-sub-heading">About Barbara Monroe:</h2>
          <h1 className="about-sec-heading">Mastering Construction<br></br>Project Success</h1>
          <h3 className="about-sec-titles">Zoning & Code Enforcement Officer | Construction PM Consultant | Site Plan Designer</h3>
          <p className="about-sec-description">
            With a track record of steering projects over obstacles to approval,
            I, Barbara Monroe, blend expertise with passion. My commitment is simple:
            transform your visions into construction triumphs through strategic
            project management.
          </p>
        </div>
        <div className="about-sec-cta">
          <div className="about-sec-icons">
            <div className="about-sec-icon-group">
              <a href="https://dos.ny.gov/building-standards-and-codes/" target="_blank">
                <img src="code-enforcement-logo.png" className="about-sec-icon" alt="NYS Licensed Code Enforcement Official LOGO" />
                <span className="about-sec-icon-text">NYS Licensed Code Enforcement Official</span>
              </a>
            </div>
            <div className="about-sec-icon-group">
              <a href="https://www.bpi.org/certified-professionals/infiltration-duct-leakage" target="_blank">
                <img src="BPI-logo.png" className="about-sec-icon" alt="Building Performance Institute, Inc. IDL Certification LOGO" />
                <span className="about-sec-icon-text">Building Performance Institute, Inc. IDL Certification</span>
              </a>
            </div>
          </div>
          <div className="about-sec-btn">
            <Link href="/about" className="about-sec-btn-primary">
              Learn More About Me
            </Link>
          </div>
        </div>
      </div>
      <div className="about-sec-img-box">
        <img src="headshot.png" className="about-sec-img" alt="B. Monroe Headshot" />
      </div>
    </section>
  );
};