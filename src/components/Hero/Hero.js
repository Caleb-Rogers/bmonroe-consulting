import React from "react";

function Hero() {
  return (
    <div className="hero">
      <section class="section-hero">
        <div class="hero">
          <div class="hero-text-box">
            <h1 class="heading-primary">
              We handle the logistics of your construction project so you can
              focus on what's important
            </h1>
            <p class="hero-description">
              Receive professional expertise on project management and delegate
              your legal work such as processing building permits, verifying
              building code & regulations, and performing safety & efficiency
              tests
            </p>
            <a href="#" class="btn btn--full margin-right-sm">
              CONTACT
            </a>
            <a href="#" class="btn btn--outline">
              LEARN MORE &darr;
            </a>
          </div>
          <div class="hero-img-box">
            <img
              src="/src/assets/hero.svg"
              class="hero-img"
              alt="Working Woman"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
