import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";


function Hero() {

  const router = useRouter();

  useEffect(() => {
    const primaryBtn = document.querySelector(".primary-btn");
    primaryBtn.onmousemove = function (e) {
      const x = e.pageX - primaryBtn.offsetLeft;
      const y = e.pageY - primaryBtn.offsetTop;

      primaryBtn.style.setProperty("--x", x + "px");
      primaryBtn.style.setProperty("--y", y + "px");
    };

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
    const primaryColors = ["#e1b711", "#ff6584", "#909090", "#333437", "#AA8D28"];
    const secondaryColors = ["#ff6584", "#e1b711", "#909090", "#333437", "#333437"];
    let colorIndex = 0;

    const animatePrimaryOverlay = () => {
      heroText.classList.add("hero-text--hidden");
      heroImg.classList.add("hero-img-box--hidden");
      let index = 0;
      const intervalId = setInterval(() => {
        overlay.style.backgroundColor = primaryColors[index];
        overlay.classList.add("overlay--active");
        setTimeout(() => {
          overlay.classList.remove("overlay--active");
        }, 100);
        index++;
        if (primaryColors === primaryColors.length) {
          clearInterval(intervalId);
        }
      }, 400); // Color Traversal Interval
      const delay = primaryColors.length * 470;
      setTimeout(() => {
        router.push("/contact");
      }, delay);
    };

    const animateSecondaryOverlay = () => {
      heroText.classList.add("hero-text--hidden");
      heroImg.classList.add("hero-img-box--hidden");
      let index = 0;
      const intervalId = setInterval(() => {
        overlay.style.backgroundColor = secondaryColors[index];
        overlay.classList.add("overlay--active");
        setTimeout(() => {
          overlay.classList.remove("overlay--active");
        }, 100);
        index++;
        if (secondaryColors === secondaryColors.length) {
          clearInterval(intervalId);
        }
      }, 400); // Color Traversal Interval
      const delay = secondaryColors.length * 430;
      setTimeout(() => {
        router.push("/services");
      }, delay);
    };

    primaryBtn.addEventListener("click", (e) => {
      e.preventDefault();
      primaryBtn.classList.add("primary-btn--clicked");
      document.querySelectorAll("span").forEach((element) => {
        element.classList.add("expanded");
      });
      animatePrimaryOverlay();
    });

    secondaryBtn.addEventListener("click", (e) => {
      e.preventDefault();
      secondaryBtn.classList.add("secondary-btn--clicked");
      document.querySelectorAll("span").forEach((element) => {
        element.classList.add("expanded");
      });
      animateSecondaryOverlay();
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