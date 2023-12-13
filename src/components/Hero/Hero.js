import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <main>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text">
            <h2 className="hero-sub-heading">
              Navigating Complexity, Delivering Excellence:
            </h2>
            <h1 className="hero-heading">Your Trusted Project Partner</h1>
            <p className="hero-description">
              Hire me to streamline your construction project from conception to completion.
              With 20+ years of experience in this field, I can establish your project's design, permitting, and development to surpass standards.
            </p>
            <div className="hero-btns">
              <Link href="/contact" className="btn primary-btn">
                Work With Us
              </Link>
              <Link href="/services" className="btn secondary-btn">
                Discover Our Services
              </Link>
            </div>
          </div>
          <div className="hero-img-container">
            <div className="hero-img-box">
              <img src="hero.svg" className="hero-img" alt="Working Woman" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;