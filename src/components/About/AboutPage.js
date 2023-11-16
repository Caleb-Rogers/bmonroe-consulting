import Link from "next/link";

<>
<link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Oswald:wght@700&family=Playfair+Display&display=swap" rel="stylesheet"></link>
</>

export default function About() {
    return (
      <>
        <div className="about-container">
            <div className="about-main">
                <div className="about-main-left">
                    <p>hiya 👋</p>
                    <br></br>
                    <h1>I’m Barbara Monroe, founder of B. Monroe Consulting. I offer zoning and project management services
                        that create happy clients through meticulous and forward-thinking plans and execution.</h1>
                    <br></br>
                    <p>I have over two decades of experience as a zoning enforcement officer, and as of recent years, the
                        transition and adaptation of consulting contractors on their construction projects. With my acquired
                        experience, I can create site plans, dispute variance issues, and aid you through the tedious legal
                        process to getting your project APPROVED.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>WORK THAT I'M PROUD OF</h2>
                    <br></br>
                    <p>Mostly:</p>
                    <p>I was the lead project manager for <a href="https://www.redpointny.com/">Red Point</a>. During my
                        time in that role I designed site plans and processed permits to get approved, allowing the business
                        to execute on their construction project. I cultivated meaningful relationships with with my clients
                        and am regarded as a efficient and effective member that can improve any team I join.
                    </p>
                    <br></br>
                    <p>But also:</p>
                    <ul>
                        <li>Built and structured the Construction Project Manager Consultant role from the ground up</li>
                        <li>Outlined preliminary structure for facilitating streamlined and efficient communication between internal teams</li>
                        <li>Shifted primary focus of ongoing partnerships from a task based structure to strategy based structure</li>
                        <li>Created customized strategic planning recommendations matching clients exact needs</li>
                        <li>Conducted creative, strategic planning, and problem solving sessions with Red Point and client teams</li>
                        <li>Translated company capabilities into formal client strategic planning, proposal and pitch documentation</li>
                        <li>Served as client archive and record for case study development and relationship engagement</li>
                        <li>Maintained and increased healthy client relationships</li>
                    </ul>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>FROM THE CAREER ARCHIVES</h2>
                    <br></br>
                    <h3>Construction Project Management Consultant, Red Point | 2019 - 2023</h3>
                    <p>Maintained, developed, increased client partnerships by cultivating close relationships, built on trust and shared vision.</p>
                    <br></br>
                    <h3>Site Plan Designer, Other Company | 2018-2022</h3>
                    <p>Managed multiple large scale redesign projects (averaging 12 months) and general ongoing support clients simultaneously</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>NOTEWORTHY CLIENT RELATIONSHIPS AS CONSTRUCTION PROJECT MANAGER CONSULTANT</h2>
                    <br></br>
                    <div><a href="https://www.redpointny.com/">Client 1</a></div>
                    <div><a href="https://www.redpointny.com/">Client 2</a></div>
                    <div><a href="https://www.redpointny.com/">Client 3</a></div>
                    <div><a href="https://www.redpointny.com/">Client 4</a></div>
                    <div><a href="https://www.redpointny.com/">Client 5</a></div>
                    <br></br>
                    <br></br>
                    <h2>PROFESSIONAL DEVELOPMENT</h2>
                    <br></br>
                    <h3>Positioning Your Agency Workshop</h3>
                    <p>Bureau of Digital | September 2022</p>
                    <br></br>
                    <h3>Biz Dev Workshop</h3>
                    <p>Bureau of Digital | June 2022</p>
                    <br></br>
                    <h3>Account Management Camp</h3>
                    <p>Bureau of Digital | May 2022</p>
                    <br></br>
                    <h3>Account Management Camp</h3>
                    <p>Bureau of Digital | May 2021</p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>ABOUT ME</h2>
                    <br></br>
                    <h3>Family movie nights</h3>
                    <h3>Draft Beer</h3>
                    <h3>Dinner and drinks</h3>
                    <h3>Amy Schumer</h3>
                    <h3>Daptone Records</h3>
                    <h3>Pasta</h3>
                    <h3>Sunday hangs</h3>
                </div>
                <div className="about-main-right">
                    <img className="headshot" src="headshot.png" alt="B. Monroe Headshot" />
                    <h4>Barbara Monroe</h4>
                    <h5>Founder at <Link className="founder" href="/">B. MONROE CONSULTING</Link></h5>
                    <Link className="socials" href="https://www.linkedin.com/in/barbara-monroe-6088439a/"><img src="linkedin-500-light.png" alt="LinkedIn Icon" /><h5> LinkedIn</h5></Link>
                    <Link className="socials" href="https://www.facebook.com/barb.monroe.18"><img src="facebook-500-light.png" alt="Facebook Icon" /><h5> Facebook</h5></Link>
                    <Link className="socials" href="/"><img src="email-64-light.png" alt="Default Email Icon" /><h5> Email</h5></Link>
                    <Link className="cta" href="/contact">Work With Me</Link>
                </div>
            </div>
        </div>
      </>
    );
  };