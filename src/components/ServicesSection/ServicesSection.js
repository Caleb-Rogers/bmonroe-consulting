// ServicesSection.js

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { animateSecondaryOverlay } from "../Overlay";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice, faGavel, faCompassDrafting, faScaleBalanced, faBolt, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

export default function ServicesSection() {

  const router = useRouter();

  useEffect(() => {

    // Service Button Spotlight Effect
    const serviceBtn = document.querySelector(".serv-btn");
    serviceBtn.onmousemove = function (e) {
      const x = e.pageX - serviceBtn.offsetLeft;
      const y = e.pageY - serviceBtn.offsetTop;
      serviceBtn.style.setProperty("--x", x + "px");
      serviceBtn.style.setProperty("--y", y + "px");
      console.log("On Mouse Move [SERVICE]");
    };

    const serviceText = document.getElementById("serv-sec-text");
    const serviceGrid = document.getElementById("serv-row");
    const serviceOverlay = document.getElementById("service-overlay");

    // Animate Color Traversal Overlay Upon Service Button Click
    serviceBtn.addEventListener("click", (e) => {
      e.preventDefault();
      serviceBtn.classList.add("serv-btn--clicked");
      serviceOverlay.classList.add("service-overlay--serv-initial");
      animateSecondaryOverlay(serviceText, serviceGrid, serviceOverlay, router);
    });
  }, []);


  return (
    <>
      <div id="service-overlay" className="service-overlay"></div>
      <section className="serv-section">
        <div className="serv-sec-text" id="serv-sec-text">
          <div className="serv-sec-line"></div>
          <div className="serv-sec-sub-heading">My Services</div>
          <div className="serv-sec-heading">What Monroe Consulting Can Do For YOU</div>
        </div>
        <div className="serv-container">
          <div className="serv-row" id="serv-row">
            <div className="serv-box">
              <FontAwesomeIcon icon={faFileInvoice} className="serv-icon" />
              <h3 className="serv-sec-title">Zoning, Land Use, & Research</h3>
              <p className="serv-sec-desc">Comprehensive analysis of zoning regulations and land use potential.</p>
              <a className="serv-btn" href="/services">Read More</a>
            </div>
            <div className="serv-box">
              <FontAwesomeIcon icon={faScaleBalanced} className="serv-icon" />
              <h3 className="serv-sec-title">Environment Permitting & Meeting Representation</h3>
              <p className="serv-sec-desc">Skilled representation before architectural review boards for project approvals.</p>
              <a className="serv-btn" href="/services">Read More</a>
            </div>
            <div className="serv-box">
              <FontAwesomeIcon icon={faGavel} className="serv-icon" />
              <h3 className="serv-sec-title">Code Enforcement</h3>
              <p className="serv-sec-desc">Diligent adherence to building codes for successful project outcomes.</p>
              <a className="serv-btn" href="/services">Read More</a>
            </div>
            <div className="serv-box">
              <FontAwesomeIcon icon={faCompassDrafting} className="serv-icon" />
              <h3 className="serv-sec-title">Design</h3>
              <p className="serv-sec-desc">Collaborative pre-design work ensuring alignment with construction codes.</p>
              <a className="serv-btn" href="/services">Read More</a>
            </div>
            <div className="serv-box">
              <FontAwesomeIcon icon={faBolt} className="serv-icon" />
              <h3 className="serv-sec-title">Energy Analysis</h3>
              <p className="serv-sec-desc">Expert certified BPI analysis for efficient project energy solutions.</p>
              <a className="serv-btn" href="/services">Read More</a>
            </div>
            <div className="serv-box">
              <FontAwesomeIcon icon={faEarthAmericas} className="serv-icon" />
              <h3 className="serv-sec-title">Land Management</h3>
              <p className="serv-sec-desc">Strategic planning of scope, phasing, and project delivery for optimal results.</p>
              <a className="serv-btn" href="/services">Read More</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};