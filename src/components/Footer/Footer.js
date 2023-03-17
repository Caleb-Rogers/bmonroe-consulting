import React from "react";

function Footer() {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Zoning, Land Use, & Research</a>
                </li>
                <li>
                  <a href="#">Code Enforcement</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">
                    Environment Permitting & Meeting Representation
                  </a>
                </li>
                <li>
                  <a href="#">Energy Analysis</a>
                </li>
                <li>
                  <a href="#">Land management</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Me</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Career</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Monroe Consulting</h3>
              <p className="footer-desc">
                Receive professional expertise on project management and
                delegate your legal work such as processing building permits,
                verifying building code & regulations, and performing safety &
                efficiency tests
              </p>
            </div>
            <div className="col item social">
              <a href="#">
                <i className="icon ion-social-facebook"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-twitter"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-snapchat"></i>
              </a>
              <a href="#">
                <i className="icon ion-social-instagram"></i>
              </a>
            </div>
          </div>
          <p className="copyright">Monroe Consulting © 2023</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
