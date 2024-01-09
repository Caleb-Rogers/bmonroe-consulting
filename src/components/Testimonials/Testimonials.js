import React, { useEffect } from "react";
import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

export default function Testimonials() {

  useEffect(() => {
    try {
      if (typeof Swiper === "undefined") {
        console.error("Swiper is not defined. Make sure it is properly loaded.");
        return;
      }

      const swiperContainer = document.querySelector(".mySwiper");
      const progressCircle = document.querySelector(".autoplay-progress svg");
      const progressNumber = document.querySelector(".autoplay-progress span");

      if (!swiperContainer || !progressCircle || !progressNumber) {
        return;
      }

      var swiper = new Swiper(swiperContainer, {
        modules: [Navigation, Pagination, Autoplay],
        slidesPerView: 1,
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        on: {
          autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressNumber.textContent = `${Math.ceil(time / 1000)}s`;
          }
        }
      });

      console.log("Swiper initialization performed");
    } catch (error) {
      console.error("Swiper initialization error:", error);
    }
  }, []);

  return (
    <section className="test-sec">
      <div className="test-text">
        <h2 className="test-sub-heading">Testimonials:</h2>
        <h1 className="test-heading">What Past Clients Have Said</h1>
      </div>
      <div className="test-container swiper mySwiper">
        <div className="test-row swiper-wrapper">
          <div className="test-box swiper-slide">
            <img className="test-img" src="stagliano.png" alt="Testimonial Image" ></img>
            <p className="test-quote">
              We highly recommend Barb Monroe and Monroe Consulting to anyone to build a new structure, renovate an existing structure,
              or help coordinating projects and navigating the permitting and codes process. Barb's expertise is exceptional, and is
              responsive to needs of her customers. Barb Monroe helped us through a challenging issue and her professionalism and focus
              was what helped us get through it.
            </p>
            <box-icon type='solid' name="quote-alt-left" color="#ff6584" size="35px"></box-icon>
            <div className="test-details">
              <span className="test-name">Joe & Pam Stagliano</span>
              <span className="test-title">Stagliano Inc.</span>
            </div>
          </div>
          <div className="test-box swiper-slide">
            <img className="test-img" src="test-img-1.png" alt="Testimonial Image" ></img>
            <p className="test-quote">
              Barb Monroe and Monroe Consulting were instrumental in the success of our building project. From the initial planning stages to 
              navigating the intricacies of permits and codes, Barb's expertise was evident every step of the way. She provided invaluable 
              insights, kept the project on track, and demonstrated a commitment to excellence that is truly commendable...
            </p>
            <box-icon type='solid' name="quote-alt-left" color="#ff6584" size="35px"></box-icon>
            <div className="test-details">
              <span className="test-name">First Last</span>
              <span className="test-title">Random, LLC.</span>
            </div>
          </div>
          <div className="test-box swiper-slide">
            <img className="test-img" src="test-img-3.png" alt="Testimonial Image" ></img>
            <p className="test-quote">
              We had the pleasure of working with Barb Monroe on our recent construction project, and we cannot recommend her highly enough. 
              Barb's knowledge of construction project management is unmatched, and her ability to navigate the complexities of permits and 
              codes made the entire process seamless...
            </p>
            <box-icon type='solid' name="quote-alt-left" color="#ff6584" size="35px"></box-icon>
            <div className="test-details">
              <span className="test-name">First Last</span>
              <span className="test-title">Random, LLC.</span>
            </div>
          </div>
          <div className="test-box swiper-slide">
            <img className="test-img" src="test-img-4.png" alt="Testimonial Image" ></img>
            <p className="test-quote">
              Choosing Barb Monroe for our construction project was one of the best decisions we made. Barb's extensive knowledge of project management, 
              coupled with her attention to detail, proved to be invaluable throughout the entire process. She skillfully guided us through the complexities 
              of permits and codes, ensuring a smooth and efficient project timeline...
            </p>
            <box-icon type='solid' name="quote-alt-left" color="#ff6584" size="35px"></box-icon>
            <div className="test-details">
              <span className="test-name">First Last</span>
              <span className="test-title">Random, LLC.</span>
            </div>
          </div>
        </div>
        <div className="swiper-button-next nav-btn"></div>
        <div className="swiper-button-prev nav-btn"></div>
        <div className="swiper-pagination"></div>
        <div className="autoplay-progress">
          <svg viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span></span>
        </div>
      </div>
      <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    </section>
  );
};