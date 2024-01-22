// Hero.js

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { animatePrimaryOverlay, animateSecondaryOverlay } from "../Overlay";


function Hero() {

  const router = useRouter();

  useEffect(() => {

    const primaryBtn = document.getElementById("primary-btn");
    const secondaryBtn = document.getElementById("secondary-btn");
    const heroText = document.getElementById("hero-text");
    const heroImg = document.getElementById("hero-img-box");
    const heroOverlay = document.getElementById("hero-overlay");
    var isMobile = false;

    // Check if the elements are found in the DOM
    if (!primaryBtn || !secondaryBtn || !heroText || !heroImg || !heroOverlay) {
      console.error("One or more elements not found in the DOM");
      return;
    }

    // Check viewport width on load and resize
    function checkViewportWidth() {
      var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
      if (viewportWidth <= 998) {
        primaryBtn.classList.remove("primary-btn");
        primaryBtn.classList.add("primary-btn--mobile");
        secondaryBtn.classList.remove("secondary-btn");
        secondaryBtn.classList.add("secondary-btn--mobile");
        isMobile = true;
      } else {
        primaryBtn.classList.add("primary-btn");
        primaryBtn.classList.remove("primary-btn--mobile");
        secondaryBtn.classList.add("secondary-btn");
        secondaryBtn.classList.remove("secondary-btn--mobile");
        isMobile = false;
      }
    }

    // Call the function on initial load and when the window is resized
    window.addEventListener('resize', checkViewportWidth);
    checkViewportWidth();

    if (!isMobile) {
       // Primary Button Spotlight Effect
       primaryBtn.onmousemove = function (e) {
        const x = e.pageX - primaryBtn.offsetLeft;
        const y = e.pageY - primaryBtn.offsetTop;
        primaryBtn.style.setProperty("--x", x + "px");
        primaryBtn.style.setProperty("--y", y + "px");
      };
      // Secondary Button Spotlight Effect
      secondaryBtn.onmousemove = function (e) {
        const x = e.pageX - secondaryBtn.offsetLeft;
        const y = e.pageY - secondaryBtn.offsetTop;
        secondaryBtn.style.setProperty("--x", x + "px");
        secondaryBtn.style.setProperty("--y", y + "px");
      };

      // Animate Color Traversal Overlay Upon Primary Button Click
      primaryBtn.addEventListener("click", (e) => {
        e.preventDefault();
        primaryBtn.classList.add("primary-btn--clicked");
        heroOverlay.classList.add("hero-overlay--primary-initial");
        animatePrimaryOverlay(heroText, heroImg, heroOverlay, router);
      });
      // Animate Color Traversal Overlay Upon Secondary Button Click
      secondaryBtn.addEventListener("click", (e) => {
        e.preventDefault();
        secondaryBtn.classList.add("secondary-btn--clicked");
        heroOverlay.classList.add("hero-overlay--secondary-initial");
        animateSecondaryOverlay(heroText, heroImg, heroOverlay, router);
      });
    }
  }, []);

  return (
    <main className="hero">
      <div id="hero-overlay" className="hero-overlay"></div>
      <section className="hero-section">
        <div className="hero-text" id="hero-text">
          <div className="hero-line"></div>
          <h2 className="hero-sub-heading">
            Navigating Complexity, Delivering Excellence
          </h2>
          <h1 className="hero-heading">Your Trusted Project Partner</h1>
          <p className="hero-description">
            Hire me to streamline your construction project from conception to completion.
            With 20+ years of experience in this field, I can establish your project's designs, permitting, and development to surpass standards.
          </p>
          <div className="hero-btns">
            <Link href="/contact" className="hero-btn primary-btn" id="primary-btn">
              <span>Work With Us</span>
            </Link>
            <Link href="/services" className="hero-btn secondary-btn" id="secondary-btn">
              <span>Discover Our Services</span>
            </Link>
          </div>
        </div>
        <div className="hero-img-box" id="hero-img-box">
          <img src="hero.svg" className="hero-img" alt="Working Woman" />
        </div>
      </section>
    </main>
  );
}

export default Hero;