// AboutSection.js

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { animateTertiaryOverlay } from "../Overlay";

export default function AboutSection() {

  const router = useRouter();

  useEffect(() => {

    const tertiaryBtn = document.querySelector(".tertiary-btn");
    const aboutText = document.querySelector(".about-sec-text");
    const aboutImg = document.querySelector(".about-sec-img-box");
    const heroOverlay = document.querySelector(".about-overlay");
    var isMobile = false;

      // Check if the elements are found in the DOM
      if (!tertiaryBtn || !aboutText || !aboutImg || !heroOverlay) {
        console.error("One or more elements not found in the DOM");
        return;
      }

    // Check viewport width on load and resize
    function checkViewportWidth() {
      var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      if (viewportWidth <= 998) {
        tertiaryBtn.classList.remove("tertiary-btn");
        isMobile = true;
      } else {
        tertiaryBtn.classList.add("tertiary-btn");
        isMobile = false;
      }
    }

    // Call the function on initial load and when the window is resized
    window.addEventListener('resize', checkViewportWidth);
    checkViewportWidth();

    if (!isMobile) {
      // Tertiary Button Spotlight Effect
      tertiaryBtn.onmousemove = function (e) {
        const x = e.pageX - tertiaryBtn.offsetLeft;
        const y = e.pageY - tertiaryBtn.offsetTop;
        tertiaryBtn.style.setProperty("--x", x + "px");
        tertiaryBtn.style.setProperty("--y", y + "px");
      };

      // Animate Color Traversal Overlay Upon Tertiary Button Click
      tertiaryBtn.addEventListener("click", (e) => {
        e.preventDefault();
        tertiaryBtn.classList.add("tertiary-btn--clicked");
        heroOverlay.classList.add("hero-overlay--tertiary-initial");
        animateTertiaryOverlay(aboutText, aboutImg, heroOverlay, router);
      });
    }
  }, []);

  return (
    <section className="about-section">
      <div className="about-overlay"></div>
      <div className="about-sec-container">
        <div className="about-sec-img-box">
          <img src="headshot.png" className="about-sec-img" alt="B. Monroe Headshot" />
        </div>
        <div className="about-sec-text">
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
          <div className="about-sec-cta">
            <div className="about-sec-icons">
              <a href="https://dos.ny.gov/building-standards-and-codes/" target="_blank">
                <img src="code-enforcement-logo.png" className="about-sec-icon" alt="NYS Licensed Code Enforcement Official LOGO" />
              </a>
              <a href="https://www.bpi.org/certified-professionals/infiltration-duct-leakage" target="_blank">
                <img src="BPI-logo.png" className="about-sec-icon" alt="Building Performance Institute, Inc. IDL Certification LOGO" />
              </a>
            </div>
            <div className="about-sec-btn-box">
              <Link href="/about" className="about-sec-btn tertiary-btn">
                <span>Learn More About Me</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};