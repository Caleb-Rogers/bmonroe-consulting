import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <main>
      <section className="section-hero">
        <div className="hero">
          <div className="hero-text-box">
            <h1 className="hero-heading">
              We handle the logistics of your construction project so you can
              focus on what's important
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
          <div className="hero-img-box">
            <img src="hero.svg" className="herro-img" alt="Working Woman" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
