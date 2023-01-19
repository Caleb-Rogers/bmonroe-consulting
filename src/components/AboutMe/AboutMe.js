import React from 'react';

const AboutMe = () => {
  return (
    <div className="about-container">
        <div className="about-text-box">
            <h1 className="about-heading">
                I'm Barb.
            </h1>
            <h2 className="about-subheading">
                I help designers and engineers through the legal process
                of getting their construction project approved, as well as
                offering expertise on site plans and project management.
            </h2>
            <ul className="about-list">
                <li className="about-list-item">NYS Licensed Code Enforcement Official</li>
                <li className="about-list-item">20+ years as a ZEO</li>
                <li className="about-list-item">Building Performance Institute, Inc.: IDL Certification</li>
            </ul>
        </div>
        <div className="about-img-box">
            <img src="headshot.png" className="about-img" alt="B. Monroe Headshot" />
        </div>
    </div>
  )
}

export default AboutMe