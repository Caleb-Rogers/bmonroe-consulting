import React from "react";

const AboutMe = () => {
  return (
    <div class="about-container">
      <div class="about-img-box">
        <img src="headshot.png" class="about-img" alt="B. Monroe Headshot" />
      </div>
      <div class="about-text-box">
        <h2 class="about-heading">ABOUT BARB</h2>
        <hr class="about-line" />
        <h3 class="about-subheading">
          I help designers and engineers through the legal process of getting
          their construction project approved, as well as offering expertise on
          site plans and project management.
        </h3>
        <div class="about-icons">
          <div class="left-icon">
            <img src="code-enforcement-logo.png" alt="NYS Licensed Code Enforcement Official LOGO" class="about-icon" />
            <span>NYS Licensed Code Enforcement Official</span>
          </div>
          <div class="right-icon">
            <img src="BPI-logo.png" alt="Building Performance Institute, Inc. IDL Certification LOGO" class="about-icon" />
            <span>Building Performance Institute, Inc. IDL Certification</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
