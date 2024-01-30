// AboutPage.js

import Link from "next/link";
import { useEffect } from "react";

<>
<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@700&family=Playfair+Display&display=swap" rel="stylesheet"></link>
</>

export default function About() {
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
        <main className="about-main">
            <div className="about-container">
                <div className="about-main-left">
                    <p className="about-text">Hello 👋</p>
                    <br></br>
                    <h1 className="about-heading">I’m Barbara Monroe, founder of B. Monroe Consulting. I offer zoning and project management services
                        that create happy clients through meticulous and forward-thinking plans and execution.</h1>
                    <br></br>
                    <p className="about-text">I have over two decades of experience as a zoning enforcement officer. As of recent years, I have
                        transitioned and adapted to consulting contractors on their construction projects. With my acquired
                        experience, I can create site plans, dispute variance issues, and aid you through the tedious legal
                        process to getting your project APPROVED.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div className="hidden">
                        <h2 className="about-sub-heading">WORK THAT I'M PROUD OF</h2>
                        <br></br>
                        <p className="about-text">Mostly:</p>
                        <p className="about-text ml">I was the lead project manager for <a className="about-link" href="https://www.redpointny.com/" target="_blank">Red Point</a>. During my
                            time in that role I designed site plans and processed permits to get approved, allowing the business
                            to execute on their construction project. I cultivated meaningful relationships with with my clients
                            and am regarded as a efficient and effective member that can improve any team I join.
                        </p>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <p className="about-text">But also:</p>
                        <ul className="about-list ml">
                            <li className="about-list-item">Built and structured the Construction Project Manager Consultant role from the ground up</li>
                            <li className="about-list-item">Outlined preliminary structure for facilitating streamlined and efficient communication between internal teams</li>
                            <li className="about-list-item">Shifted primary focus of ongoing partnerships from a task based structure to strategy based structure</li>
                            <li className="about-list-item">Created customized strategic planning recommendations matching clients exact needs</li>
                            <li className="about-list-item">Conducted creative, strategic planning, and problem solving sessions with Red Point and client teams</li>
                            <li className="about-list-item">Translated company capabilities into formal client strategic planning, proposal and pitch documentation</li>
                            <li className="about-list-item">Served as client archive and record for case study development and relationship engagement</li>
                            <li className="about-list-item">Maintained and increased healthy client relationships</li>
                        </ul>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <h2 className="about-sub-heading">FROM THE CAREER ARCHIVES</h2>
                        <br></br>
                        <h3 className="about-title">Construction Project Management Consultant, Red Point | 2019 - 2023</h3>
                        <p className="about-text">Maintained, developed, increased client partnerships by cultivating close relationships, built on trust and shared vision.</p>
                        <br></br>
                        <h3 className="about-title">Site Plan Designer, Other Company | 2018-2022</h3>
                        <p className="about-text">Managed multiple large scale redesign projects (averaging 12 months) and general ongoing support clients simultaneously</p>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <h2 className="about-sub-heading">NOTEWORTHY CLIENT RELATIONSHIPS AS CONSTRUCTION PROJECT MANAGER CONSULTANT</h2>
                        <br></br>
                        <div><a className="about-link" href="https://www.redpointny.com/" target="_blank">Client 1</a></div>
                        <div><a className="about-link" href="https://www.redpointny.com/" target="_blank">Client 2</a></div>
                        <div><a className="about-link" href="https://www.redpointny.com/" target="_blank">Client 3</a></div>
                        <div><a className="about-link" href="https://www.redpointny.com/" target="_blank">Client 4</a></div>
                        <div><a className="about-link" href="https://www.redpointny.com/" target="_blank">Client 5</a></div>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <h2 className="about-sub-heading">PROFESSIONAL DEVELOPMENT</h2>
                        <br></br>
                        <h3 className="about-title">Positioning Your Agency Workshop</h3>
                        <p className="about-text">Bureau of Digital | September 2022</p>
                        <br></br>
                        <h3 className="about-title">Biz Dev Workshop</h3>
                        <p className="about-text">Bureau of Digital | June 2022</p>
                        <br></br>
                        <h3 className="about-title">Account Management Camp</h3>
                        <p className="about-text">Bureau of Digital | May 2022</p>
                        <br></br>
                        <h3 className="about-title">Account Management Camp</h3>
                        <p className="about-text">Bureau of Digital | May 2021</p>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                    <div className="hidden">
                        <h2 className="about-sub-heading">ABOUT ME</h2>
                        <br></br>
                        <h3 className="about-text">Family movie nights</h3>
                        <h3 className="about-text">Draft Beer</h3>
                        <h3 className="about-text">Dinner and drinks</h3>
                        <h3 className="about-text">Amy Schumer</h3>
                        <h3 className="about-text">Daptone Records</h3>
                        <h3 className="about-text">Pasta</h3>
                        <h3 className="about-text">Sunday hangs</h3>
                    </div>
                </div>
                <div className="about-main-right">
                    <img className="headshot" src="headshot.png" alt="B. Monroe Headshot" />
                    <div className="client-text">
                      <h4 className="about-name">Barbara Monroe</h4>
                      <h5 className="about-info">Founder at <Link className="founder" href="/">MONROE CONSULTING</Link></h5>
                    </div>
                    <div className="about-btn-box">
                      <Link href="/contact" className="about-btn">
                        <span>Work With Me</span>
                      </Link>
                    </div>
                </div>
            </div>
        </main>
      </>
    );
  };