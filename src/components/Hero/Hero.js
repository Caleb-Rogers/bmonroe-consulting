import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <main>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text">
            <h1 className="hero-heading">
              Navigating Complexity, Delivering Excellence: Your Trusted Project Partner
            </h1>
            <p className="hero-description">
              From concept to completion, we orchestrate every detail. Elevate your construction projects
              with our seasoned management expertise. Let's build success together.
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