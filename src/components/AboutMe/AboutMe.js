import React from "react";

const AboutMe = () => {
  return (
    <div class="about-container">
      <div class="about-header">
        <h1>About Barbara Monroe</h1>
        <p>Helping designers and engineers for 20 years to get through the legal process of getting
            their construction project approved, as well as offering expertise on
            site plans and project management.</p>
      </div>
      <div class="about-main-wrapper">
        <div class="about-main">
          <div class="about-main-left">
            <img src="headshot.png" alt="B. Monroe Headshot" />
          </div>
          <div class="about-main-right">
            <h2>Handling construction logistics so you can focus on what's important</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris aliquet justo quis cursus
              dignissim. Sed accumsan aliquet urna, quis gravida dolor sagittis in. Proin tincidunt massa
              maximus consequat congue. Nullam maximus, purus at ultricies facilisis, nisl leo elementum lacus,
              nec maximus dui felis id velit. Fusce commodo mattis eros id sagittis. Pellentesque congue nulla
              non urna pharetra, eu ornare urna viverra. Integer sodales consectetur urna, sit amet lacinia eros fringilla nec.
            </p>
            <div class="about-icons">
              <div class="left-icon">
                <img src="code-enforcement-logo.png" alt="NYS Licensed Code Enforcement Official LOGO" />
                <span>NYS Licensed Code Enforcement Official</span>
              </div>
              <div class="right-icon">
                <img src="BPI-logo.png" alt="Building Performance Institute, Inc. IDL Certification LOGO" />
                <span>Building Performance Institute, Inc. IDL Certification</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
