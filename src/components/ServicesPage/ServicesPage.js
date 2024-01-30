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
        <main className="service-main">
            <div className="service-container">
                <div className="service-main-left">
                    <p className="serv-text">What I Do 🙌</p>
                    <br></br>
                    <h1 className="serv-heading">B. Monroe Consulting Services</h1>
                    <br></br>
                    <p className="serv-text">
                        In the world of construction, we don't just manage projects; we master them. Your vision deserves 
                        the expertise we bring to every detail.<br></br>
                        Feel free to tailor these examples to fit your specific style and emphasize the unique qualities 
                        of the construction project management consultancy.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="hidden">
                        <h3 className="serv-sub-heading">OUR SERVICES</h3>
                        <br></br>
                        <h2 className="serv-title">Zoning, Land Use, & Research</h2>
                        <p className="serv-text">Comprehensive analysis of zoning regulations and land use potential.</p>
                        <ul className="serv-list ml">
                            <li className="serv-list-item">Zoning and land use research</li>
                            <li className="serv-list-item">Location analysis</li>
                            <li className="serv-list-item">Site plan approvals</li>
                            <li className="serv-list-item">Conditional use permits</li>
                            <li className="serv-list-item">Zoning ordinance appeals</li>
                            <li className="serv-list-item">oning ordinance variances</li>
                            <li className="serv-list-item">Zoning ordinance amending</li>
                            <li className="serv-list-item">Property re-zoning</li>
                            <li className="serv-list-item">Architectural review approvals</li>
                            <li className="serv-list-item">review approvals</li>
                            <li className="serv-list-item">Public Works and Transportation Approvals</li>
                            <li className="serv-list-item">Zoning violations</li>
                        </ul>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <br></br>
                        <h2 className="serv-title">Code Enforcement</h2>
                        <p className="serv-text">Diligent adherence to building codes for successful project outcomes.</p>
                        <ul className="serv-list ml">
                            <li className="serv-list-item">Demolition permits</li>
                            <li className="serv-list-item">Building Codes Analysis</li>
                            <li className="serv-list-item">uilding Permits</li>
                            <li className="serv-list-item">Occupancy permits</li>
                            <li className="serv-list-item">Special Permits</li>
                            <li className="serv-list-item">Temporary Structures permits</li>
                            <li className="serv-list-item">Code violations</li>
                        </ul>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <br></br>
                        <h2 className="serv-title">Design</h2>
                        <p className="serv-text">Collaborative pre-design work ensuring alignment with construction codes.</p>
                        <ul className="serv-list ml">
                            <li className="serv-list-item">Pre-design work to ensure compliance with the Code</li>
                            <li className="serv-list-item">Site plan design</li>
                            <li className="serv-list-item">Pre-design work for engineers and architects</li>
                        </ul>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <br></br>
                        <h2 className="serv-title">Environment Permitting & Meeting Representation</h2>
                        <p className="serv-text">Skilled representation before architectural review boards for project approvals.</p>
                        <ul className="serv-list ml">
                            <li className="serv-list-item">Architectural Review Boards</li>
                            <li className="serv-list-item">Historic District Commissions</li>
                            <li className="serv-list-item">Planning Commissions</li>
                            <li className="serv-list-item">Town Boards</li>
                            <li className="serv-list-item">Zoning Board of Appeals</li>
                            <li className="serv-list-item">Building Code Board of Appeals</li>
                            <li className="serv-list-item">City and County Councils</li>
                            <li className="serv-list-item">State Regulatory Agencies</li>
                        </ul>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <br></br>
                        <h2 className="serv-title">Energy Analysis</h2>
                        <p className="serv-text">Expert certified BPI analysis for efficient project energy solutions.</p>
                        <ul className="serv-list ml">
                            <li className="serv-list-item">Certified BPI Infiltration and Duct Leakage (Blower Door Testing)</li>
                            <li className="serv-list-item">Home efficiency analysis</li>
                        </ul>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <br></br>
                        <h2 className="serv-title">Land Management</h2>
                        <p className="serv-text">Strategic planning of scope, phasing, and project delivery for optimal results.</p>
                        <ul className="serv-list ml">
                            <li className="serv-list-item">Analyzing feasibility for the highest and best use for the asset or land</li>
                            <li className="serv-list-item">Researching property history and allowable uses</li>
                            <li className="serv-list-item">Coordinating permitting</li>
                            <li className="serv-list-item">Planning the scope, phasing, and project delivery method</li>
                            <li className="serv-list-item">Managing properties for absentee landowners</li>
                        </ul>
                        <br></br>
                    </div>
                </div>
                <div className="service-main-right">
                    <img className="headshot" src="headshot.png" alt="B. Monroe Headshot" />
                    <div className="client-text">
                      <h4 className="serv-name">Barbara Monroe</h4>
                      <h5 className="serv-info">Founder at <Link className="founder" href="/">MONROE CONSULTING</Link></h5>
                    </div>
                    <div className="service-btn-box">
                      <Link href="/contact" className="service-btn">
                        <span>Work With Me</span>
                      </Link>
                    </div>
                </div>
            </div>
        </main>
      </>
    );
  };