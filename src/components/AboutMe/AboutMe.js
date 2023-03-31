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
          <img src="icon1.png" alt="Icon 1" class="about-icon" />
          <img src="icon2.png" alt="Icon 2" class="about-icon" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
