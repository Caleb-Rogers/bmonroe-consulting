// ServicesPage.js

import Link from "next/link";
import { useEffect } from "react";

<>
<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@700&family=Playfair+Display&display=swap" rel="stylesheet"></link>
</>

export default function Service() {
    useEffect(() => {
        if ("IntersectionObserver" in window) {
          const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('show');
              } else {
                entry.target.classList.remove('show');
              }
            });
          });

          const hiddenElements = document.querySelectorAll('.hidden');
          hiddenElements.forEach((element) => observer.observe(element));

          return () => {
            hiddenElements.forEach((element) => observer.unobserve(element));
          };
        }
      }, []);
    return (
      <>
        <div className="service-container">
            <div className="service-main">
                <div className="service-main-left">
                    <p>What I Do 🙌</p>
                    <br></br>
                    <h1>B. Monroe Consulting Services</h1>
                    <br></br>
                    <p>
                        In the world of construction, we don't just manage projects; we master them. Your vision deserves 
                        the expertise we bring to every detail.<br></br>
                        Feel free to tailor these examples to fit your specific style and emphasize the unique qualities 
                        of the construction project management consultancy.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="hidden">
                        <h3>OUR SERVICES</h3>
                        <br></br>
                        <h2>Zoning, Land Use, & Research</h2>
                        <p>Comprehensive analysis of zoning regulations and land use potential.</p>
                        <ul>
                            <li>Zoning and land use research</li>
                            <li>Location analysis</li>
                            <li>Site plan approvals</li>
                            <li>Conditional use permits</li>
                            <li>Zoning ordinance appeals</li>
                            <li>Zoning ordinance variances</li>
                            <li>Zoning ordinance amending</li>
                            <li>Property re-zoning</li>
                            <li>Architectural review approvals</li>
                            <li>review approvals</li>
                            <li>Public Works and Transportation Approvals</li>
                            <li>Zoning violations</li>
                        </ul>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <br></br>
                        <h2>Code Enforcement</h2>
                        <p>Diligent adherence to building codes for successful project outcomes.</p>
                        <ul>
                            <li>Demolition permits</li>
                            <li>Building Codes Analysis</li>
                            <li>Building Permits</li>
                            <li>Occupancy permits</li>
                            <li>Special Permits</li>
                            <li>Temporary Structures permits</li>
                            <li>Code violations</li>
                        </ul>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <br></br>
                        <h2>Design</h2>
                        <p>Collaborative pre-design work ensuring alignment with construction codes.</p>
                        <ul>
                            <li>Pre-design work to ensure compliance with the Code</li>
                            <li>Site plan design</li>
                            <li>Pre-design work for engineers and architects</li>
                        </ul>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <br></br>
                        <h2>Environment Permitting & Meeting Representation</h2>
                        <p>Skilled representation before architectural review boards for project approvals.</p>
                        <ul>
                            <li>Architectural Review Boards</li>
                            <li>Historic District Commissions</li>
                            <li>Planning Commissions</li>
                            <li>Town Boards</li>
                            <li>Zoning Board of Appeals</li>
                            <li>Building Code Board of Appeals</li>
                            <li>City and County Councils</li>
                            <li>State Regulatory Agencies</li>
                        </ul>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <br></br>
                        <h2>Energy Analysis</h2>
                        <p>Expert certified BPI analysis for efficient project energy solutions.</p>
                        <ul>
                            <li>Certified BPI Infiltration and Duct Leakage (Blower Door Testing)</li>
                            <li>Home efficiency analysis</li>
                        </ul>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <br></br>
                        <h2>Land Management</h2>
                        <p>Strategic planning of scope, phasing, and project delivery for optimal results.</p>
                        <ul>
                            <li>Analyzing feasibility for the highest and best use for the asset or land</li>
                            <li>Researching property history and allowable uses</li>
                            <li>Coordinating permitting</li>
                            <li>Planning the scope, phasing, and project delivery method</li>
                            <li>Managing properties for absentee landowners</li>
                        </ul>
                        <br></br>
                    </div>
                </div>
                <div className="service-main-right">
                    <img className="headshot" src="headshot.png" alt="B. Monroe Headshot" />
                    <div className="client-text">
                      <h4>Barbara Monroe</h4>
                      <h5>Founder at <Link className="founder" href="/">B. MONROE CONSULTING</Link></h5>
                    </div>
                    <Link className="service-pg-cta" href="/contact">Work With Me</Link>
                </div>
            </div>
        </div>
      </>
    );
  };