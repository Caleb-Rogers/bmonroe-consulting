// Hero.js

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { animatePrimaryOverlay, animateSecondaryOverlay } from "./Overlay";


function Hero() {

  const router = useRouter();

  useEffect(() => {

    // Primary Button Spotlight Effect
    const primaryBtn = document.querySelector(".primary-btn");
    primaryBtn.onmousemove = function (e) {
      const x = e.pageX - primaryBtn.offsetLeft;
      const y = e.pageY - primaryBtn.offsetTop;
      primaryBtn.style.setProperty("--x", x + "px");
      primaryBtn.style.setProperty("--y", y + "px");
    };
    // Secondary Button Spotlight Effect
    const secondaryBtn = document.querySelector(".secondary-btn");
    secondaryBtn.onmousemove = function (e) {
      const x = e.pageX - secondaryBtn.offsetLeft;
      const y = e.pageY - secondaryBtn.offsetTop;
      secondaryBtn.style.setProperty("--x", x + "px");
      secondaryBtn.style.setProperty("--y", y + "px");
    };

    const heroText = document.getElementById("hero-text");
    const heroImg = document.getElementById("hero-img-box");
    const overlay = document.getElementById("overlay");

    // Animate Color Traversal Overlay Upon Primary Button Click
    primaryBtn.addEventListener("click", (e) => {
      e.preventDefault();
      primaryBtn.classList.add("primary-btn--clicked");
      animatePrimaryOverlay(heroText, heroImg, overlay, router);
    });
    // Animate Color Traversal Overlay Upon Secondary Button Click
    secondaryBtn.addEventListener("click", (e) => {
      e.preventDefault();
      secondaryBtn.classList.add("secondary-btn--clicked");
      animateSecondaryOverlay(heroText, heroImg, overlay, router);
    });
  }, []);

  return (
    <main className="hero">
      <div id="overlay" className="overlay"></div>
      <div id="app"></div>
      <section className="hero-section">
        <div className="hero-text" id="hero-text">
          <h2 className="hero-sub-heading">
            Navigating Complexity, Delivering Excellence:
          </h2>
          <h1 className="hero-heading">Your Trusted Project Partner</h1>
          <p className="hero-description">
            Hire me to streamline your construction project from conception to completion.
            With 20+ years of experience in this field, I can establish your project's designs, permitting, and development to surpass standards.
          </p>
          <div className="hero-btns">
            <Link href="/contact" className="hero-btn primary-btn">
              <span>Work With Us</span>
              <span className="color color--blue"></span>
              <span className="color color--orange"></span>
              <span className="color color--green"></span>
              <span className="color color--white"></span>
            </Link>
            <Link href="/services" className="hero-btn secondary-btn">
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