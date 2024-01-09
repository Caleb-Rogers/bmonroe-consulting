import React, { useEffect } from "react";
import Link from "next/link";

function Hero() {

  useEffect(() => {
    const primaryBtn = document.querySelector(".primary-btn");
    primaryBtn.onmousemove = function (e) {
      const x = e.pageX - primaryBtn.offsetLeft;
      const y = e.pageY - primaryBtn.offsetTop;
  
      primaryBtn.style.setProperty("--x", x + "px");
      primaryBtn.style.setProperty("--y", y + "px");
    };
  }, []);

  return (
    <main className="hero">
      <section className="hero-section">
        <div className="hero-text">
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
            </Link>
            <Link href="/services" className="hero-btn secondary-btn">
              <span>Discover Our Services</span>
            </Link>
          </div>
        </div>
        <div className="hero-img-box">
          <img src="hero.svg" className="hero-img" alt="Working Woman" />
        </div>
      </section>
    </main>
  );
}

export default Hero;