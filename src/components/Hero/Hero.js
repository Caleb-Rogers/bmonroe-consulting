import React from "react";
import Link from "next/link";

function Hero() {
  return (
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
                    <Link href="#" class="btn btn--full margin-right-sm">CONTACT</Link>
                    <Link href="#" class="btn btn--outline">LEARN MORE &darr;</Link>
                </div>
                <div class="hero-img-box">
                    <img src="hero.svg" class="herro-img" alt="Working Woman"/>
                </div>
            </div>
        </section>
    </main>
  );
}

export default Hero;
