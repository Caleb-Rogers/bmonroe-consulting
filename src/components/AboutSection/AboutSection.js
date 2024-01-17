// AboutSection.js

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { animateTertiaryOverlay } from "../Overlay";

export default function AboutSection() {

  const router = useRouter();

  useEffect(() => {

    const tertiaryBtn = document.getElementById("tertiary-btn");

    // Tertiary Button Spotlight Effect
    tertiaryBtn.onmousemove = function (e) {
      const x = e.pageX - tertiaryBtn.offsetLeft;
      const y = e.pageY - tertiaryBtn.offsetTop;
      tertiaryBtn.style.setProperty("--x", x + "px");
      tertiaryBtn.style.setProperty("--y", y + "px");
    };

    const aboutText = document.getElementById("about-sec-text");
    const aboutImg = document.getElementById("about-sec-img-box");
    const heroOverlay = document.getElementById("about-overlay");

    // Animate Color Traversal Overlay Upon Tertiary Button Click
    tertiaryBtn.addEventListener("click", (e) => {
      e.preventDefault();
      tertiaryBtn.classList.add("tertiary-btn--clicked");
      heroOverlay.classList.add("hero-overlay--tertiary-initial");
      animateTertiaryOverlay(aboutText, aboutImg, heroOverlay, router);
    });

    // Check viewport width on load and resize
    function checkViewportWidth() {
      var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      console.log("Check Viewport Width CALLED");
      if (viewportWidth <= 998) {
        tertiaryBtn.classList.remove("tertiary-btn");
        tertiaryBtn.classList.add("tertiary-btn--mobile");
      } else {
        tertiaryBtn.classList.add("tertiary-btn");
        tertiaryBtn.classList.remove("tertiary-btn--mobile");
      }
    }

    // Call the function on initial load and when the window is resized
    window.addEventListener('resize', checkViewportWidth);
    checkViewportWidth();
  }, []);

  return (
    <section className="about-section">
      <div id="about-overlay" className="about-overlay"></div>
      <div className="about-sec-container">
        <div className="about-sec-text" id="about-sec-text">
          <div className="about-sec-line"></div>
          <h2 className="about-sec-sub-heading">About Barbara Monroe</h2>
          <h1 className="about-sec-heading">Mastering Construction<br></br>Project Success</h1>
          <h3 className="about-sec-titles"><span>Zoning & Code Enforcement Officer</span><span className="dot"> • </span><span>Construction PM Consultant</span><span className="dot"> • </span><span>Site Plan Designer</span></h3>
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
            <Link href="/about" className="tertiary-btn" id="tertiary-btn">
              <span>Learn More About Me</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="about-sec-img-box" id="about-sec-img-box">
        <img src="headshot.png" className="about-sec-img" alt="B. Monroe Headshot" />
      </div>
    </section>
  );
};