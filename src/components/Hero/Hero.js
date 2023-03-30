import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <main>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-img-box">
            <img src="hero-background-img.jpg" className="hero-img" alt="site-plan" />
          </div>
          <div className="hero-text-box">
            <h1 className="hero-heading">
              YOUR PARTNER IN CONSTRUCTION PROJECT MANAGEMENT
            </h1>
            <p className="hero-description">
              Receive professional expertise on project management and delegate
              your legal work such as processing building permits, verifying
              building code & regulations, and performing safety & efficiency
              tests
            </p>
            <Link href="#" className="btn btn--full margin-right-sm">
              CONTACT
            </Link>
            <Link href="#" className="btn btn--outline">
              LEARN MORE &darr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
