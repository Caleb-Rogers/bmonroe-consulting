import React, { useEffect, useState } from 'react';


export default function ServicesSection() {

  const [isButtonHovered] = useState(false);

  useEffect(() => {
    const buttons = document.querySelectorAll("[data-carousel-button]");

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button
          .closest("[data-carousel]")
          .querySelector("[data-slides]");

        const activeSlide = slides.querySelector("[data-active]");
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        slides.querySelectorAll(".slide").forEach((slide) => {
          delete slide.dataset.active;
          slide.style.transition = "200ms transform ease-in-out";
        });

        const currentSlide = slides.children[newIndex];
        const nextIndex = (newIndex + 1) % slides.children.length;
        const prevIndex = (newIndex - 1 + slides.children.length) % slides.children.length;

        slides.children[newIndex].dataset.active = true;
        slides.children[nextIndex].style.transform = "translateX(100%)";
        slides.children[prevIndex].style.transform = "translateX(-100%)";

        activeSlide.style.transform = offset > 0 ? "translateX(-100%)" : "translateX(100%)";
        currentSlide.style.transform = "translateX(-50%)";

        setTimeout(() => {
          slides.querySelectorAll(".slide").forEach((slide) => {
            slide.style.transition = "none";
          });
        }, 200);
      });
      button.addEventListener("mouseenter", () => {
        const buttonType = button.dataset.carouselButton;
        const imageSrc = buttonType === "prev" ? "prev-btn-100-yellow.png" : "next-btn-100-yellow.png";
        button.querySelector("img").src = imageSrc;
        button.style.backgroundColor = "#333437";
      });

      button.addEventListener("mouseleave", () => {
        const buttonType = button.dataset.carouselButton;
        const imageSrc = buttonType === "prev" ? "prev-btn-100-dark.png" : "next-btn-100-dark.png";
        button.querySelector("img").src = imageSrc;
        button.style.backgroundColor = "#909090";
      });
    });
  }, []);

  return (
    <section className="serv-section">
      <div className="serv-heading">
        <h2>Our Services</h2>
      </div>
      <div className="serv-container">
        <div class="carousel" data-carousel>
          <button className="carousel-button prev" data-carousel-button="prev">
            <img
              src={isButtonHovered ? "prev-btn-100-yellow.png" : "prev-btn-100-dark.png"}
              alt="Previous Button"
            />
          </button>
          <button className="carousel-button next" data-carousel-button="next">
            <img
              src={isButtonHovered ? "next-btn-100-yellow.png" : "next-btn-100-dark.png"}
              alt="Next Button"
            />
          </button>
          <ul data-slides>
            <li class="slide" data-active>
              <div className="serv-card">
              <div className="serv-lines"></div>
                <div className="serv-img-box">
                  <img src="research-100-light.png" alt="Zoning, Land Use, & Research ICON"></img>
                </div>
                <div className="serv-content">
                  <div className="serv-details">
                    <h2>Zoning, Land Use, & Research</h2>
                    <p>
                      Zoning and land use research, Location analysis, Site plan approvals, Conditional use permits, 
                      Zoning ordinance appeals, Zoning ordinance variances, Zoning ordinance amending, Property re-zoning, 
                      Architectural review approvals, Public Works and Transportation Approvals, Zoning violations
                    </p>
                    <a href="/services">Read More</a>
                  </div>
                </div>
            </div>
            </li>
            <li class="slide">
              <div className="serv-card">
                <div className="serv-lines"></div>
                  <div className="serv-img-box">
                    <img src="permit-100-light.png" alt="Zoning, Land Use, & Research ICON"></img>
                  </div>
                  <div className="serv-content">
                    <div className="serv-details">
                      <h2>Code Enforcement</h2>
                      <p>
                        Demolition permits, Building Codes Analysis, Building Permits, Occupancy permits, Special Permits, 
                        Temporary Structures permits, Code violations
                      </p>
                      <a href="/services">Read More</a>
                    </div>
                  </div>
              </div>
            </li>
            <li class="slide">
              <div className="serv-card">
                <div className="serv-lines"></div>
                  <div className="serv-img-box">
                    <img src="floorplan-80-light.png" alt="Zoning, Land Use, & Research ICON"></img>
                  </div>
                  <div className="serv-content">
                    <div className="serv-details">
                      <h2>Design</h2>
                      <p>
                        Pre-design work to ensure compliance with the Code, Site plan design, Pre-design work for engineers and architects
                      </p>
                      <a href="/services">Read More</a>
                    </div>
                  </div>
              </div>
            </li>
            <li class="slide">
              <div className="serv-card">
                <div className="serv-lines"></div>
                  <div className="serv-img-box">
                    <img src="justice-100-light.png" alt="Zoning, Land Use, & Research ICON"></img>
                  </div>
                  <div className="serv-content">
                    <div className="serv-details">
                      <h2>Environment Permitting & Meeting Representation</h2>
                      <p>
                        Architectural Review Boards, Historic District Commissions, Planning Commissions, Town Boards, Zoning Board of Appeals, Building Code Board of Appeals, City and County Councils, State Regulatory Agencies
                      </p>
                      <a href="/services">Read More</a>
                    </div>
                  </div>
              </div>
            </li>
            <li class="slide">
              <div className="serv-card">
                <div className="serv-lines"></div>
                <div className="serv-img-box">
                  <img src="nrganalysis-80-light.png" alt="Zoning, Land Use, & Research ICON"></img>
                </div>
                <div className="serv-content">
                  <div className="serv-details">
                    <h2>Energy Analysis</h2>
                    <p>
                      Certified BPI Infiltration and Duct Leakage(Blower Door Testing), Home efficiency analysis
                    </p>
                    <a href="/services">Read More</a>
                  </div>
                </div>
              </div>
            </li>
            <li class="slide">
              <div className="serv-card">
                <div className="serv-lines"></div>
                <div className="serv-img-box">
                  <img src="land-100-light.png" alt="Zoning, Land Use, & Research ICON"></img>
                </div>
                <div className="serv-content">
                  <div className="serv-details">
                    <h2>Land Management</h2>
                    <p>
                      Analyzing feasibility for the highest and best use for the asset or land, Researching property history and allowable uses, Coordinating permitting, Planning the scope, phasing, and project delivery method, Managing properties for absentee landowners
                    </p>
                    <a href="/services">Read More</a>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};