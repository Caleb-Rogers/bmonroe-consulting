import React from "react";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-sec-container">
        <div className="about-sec-content">
          <div className="about-sec-heading">
            <h2>About Barbara Monroe: Mastering Construction Project Success</h2>
          </div>
          <div className="about-sec-sub-heading">
            <h3>Zoning & Code Enforcement Officer | Construction PM Consultant | Site Plan Designer</h3>
          </div>
          <div className="about-sec-description">
            <p>
              With a track record of steering projects from concept to completion, I, Barbara Monroe,
              blend expertise with passion. My commitment is simple: transform your visions into construction
              triumphs through strategic project management.
            </p>
          </div>
          <div className="about-cta-btn">
            <Link href="/about" className="about-btn">
                Learn More About Me
              </Link>
          </div>
        </div>
        <div className="about-sec-img-box">
          <div className="about-sec-img">
            <img src="headshot.png" alt="B. Monroe Headshot" />
          </div>
          <div className="icons">
            <img src="code-enforcement-logo.png" alt="NYS Licensed Code Enforcement Official LOGO" />
          <span>NYS Licensed Code Enforcement Official</span>
            <img src="BPI-logo.png" alt="Building Performance Institute, Inc. IDL Certification LOGO" />
            <span>Building Performance Institute, Inc. IDL Certification</span>
        </div>
        </div>
      </div>

    </section>
  );
};