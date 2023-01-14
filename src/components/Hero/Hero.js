import React from "react";
import Link from "next/link";

function Hero() {
  return (
    <div class="dude">
      <header class="header">
          <span class="logo-nav">B.Monroe Consulting</span>
          <nav class="main-nav">
              <ul class="main-nav-list">
                  <Link class="main-nav-link" href="#">HOME</Link>
                  <Link class="main-nav-link" href="#">WHAT WE DO</Link>
                  <Link class="main-nav-link" href="#">SERVICES</Link>
                  <Link class="main-nav-link" href="#">ABOUT</Link>
                  <Link class="main-nav-link nav-cta" href="#">CONTACT</Link>
              </ul>
          </nav>
      </header>

      <main>
          <section class="section-hero">
              <div class="hero">
                  <div class="hero-text-box">
                      <h1 class="hero-heading">
                          We handle the logistics of your construction project so you can focus on what's important
                      </h1>
                      <p class="hero-description">
                          Receive professional expertise on project management and delegate your legal work such as processing 
                          building permits, verifying building code & regulations, and performing safety & efficiency tests
                      </p>
                      <a href="#" class="btn btn--full margin-right-sm">CONTACT</a>
                      <a href="#" class="btn btn--outline">LEARN MORE &darr;</a>
                  </div>
                  <div class="hero-img-box">
                      <img src="hero.svg" class="herro-img" alt="Working Woman"/>
                  </div>
              </div>
          </section>
      </main>
    </div>
  );
}

export default Hero;
