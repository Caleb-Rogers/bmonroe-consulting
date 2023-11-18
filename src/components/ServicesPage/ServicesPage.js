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
              console.log(entry);
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
                        <p>
                            Zoning and land use research, Location analysis, Site plan approvals, Conditional use permits, 
                            Zoning ordinance appeals, Zoning ordinance variances, Zoning ordinance amending, Property re-zoning, 
                            Architectural review approvals, Public Works and Transportation Approvals, Zoning violations
                        </p>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <br></br>
                        <h2>Code Enforcement</h2>
                        <p>
                            Demolition permits, Building Codes Analysis, Building Permits, Occupancy permits, Special Permits, 
                            Temporary Structures permits, Code violations
                        </p>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <br></br>
                        <h2>Design</h2>
                        <p>
                            Pre-design work to ensure compliance with the Code, Site plan design, Pre-design work for engineers 
                            and architects
                        </p>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <br></br>
                        <h2>Environment Permitting & Meeting Representation</h2>
                        <p>
                            Architectural Review Boards, Historic District Commissions, Planning Commissions, Town Boards, Zoning 
                            Board of Appeals, Building Code Board of Appeals, City and County Councils, State Regulatory Agencies
                        </p>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <br></br>
                        <h2>Energy Analysis</h2>
                        <p>
                            Certified BPI Infiltration and Duct Leakage(Blower Door Testing), Home efficiency analysis
                        </p>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <br></br>
                        <h2>Land Management</h2>
                        <p>
                            Analyzing feasibility for the highest and best use for the asset or land, Researching property history and 
                            allowable uses, Coordinating permitting, Planning the scope, phasing, and project delivery method, Managing 
                            properties for absentee landowners
                        </p>
                        <br></br>
                    </div>
                </div>
                <div className="service-main-right">
                    <img className="headshot" src="headshot.png" alt="B. Monroe Headshot" />
                    <h4>Barbara Monroe</h4>
                    <h5>Founder at <Link className="founder" href="/">B. MONROE CONSULTING</Link></h5>
                    <Link className="socials" href="https://www.linkedin.com/in/barbara-monroe-6088439a/" target="_blank"><img src="linkedin-500-yellow.png" alt="LinkedIn Icon" /><h5> LinkedIn</h5></Link>
                    <Link className="socials" href="https://www.facebook.com/barb.monroe.18" target="_blank"><img src="facebook-500-yellow.png" alt="Facebook Icon" /><h5> Facebook</h5></Link>
                    <Link className="socials" href="/"><img src="email-64-yellow.png" alt="Default Email Icon" /><h5> Email</h5></Link>
                    <Link className="cta" href="/contact">Work With Me</Link>
                </div>
            </div>
        </div>
      </>
    );
  };