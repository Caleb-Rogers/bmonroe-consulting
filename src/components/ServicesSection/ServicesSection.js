// ServicesSection.js

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileInvoice, faGavel, faCompassDrafting, faScaleBalanced, faBolt, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

export default function ServicesSection() {
  return (
    <section className="serv-section">
      <div className="serv-sec-text">
        <div className="serv-sec-line"></div>
        <div className="serv-sec-sub-heading">My Services</div>
        <div className="serv-sec-heading">What Monroe Consulting Can Do For YOU</div>
      </div>
      <div className="serv-container">
        <div className="serv-row">
          <div className="serv-box">
            <FontAwesomeIcon icon={faFileInvoice} className="serv-icon" />
            <h3 className="serv-title">Zoning, Land Use, & Research</h3>
            <p className="serv-desc">Comprehensive analysis of zoning regulations and land use potential.</p>
            <a className="serv-btn" href="/services">Read More</a>
          </div>
          <div className="serv-box">
            <FontAwesomeIcon icon={faScaleBalanced} className="serv-icon" />
            <h3 className="serv-title">Environment Permitting & Meeting Representation</h3>
            <p className="serv-desc">Skilled representation before architectural review boards for project approvals.</p>
            <a className="serv-btn" href="/services">Read More</a>
          </div>
          <div className="serv-box">
            <FontAwesomeIcon icon={faGavel} className="serv-icon" />
            <h3 className="serv-title">Code Enforcement</h3>
            <p className="serv-desc">Diligent adherence to building codes for successful project outcomes.</p>
            <a className="serv-btn" href="/services">Read More</a>
          </div>
          <div className="serv-box">
            <FontAwesomeIcon icon={faCompassDrafting} className="serv-icon" />
            <h3 className="serv-title">Design</h3>
            <p className="serv-desc">Collaborative pre-design work ensuring alignment with construction codes.</p>
            <a className="serv-btn" href="/services">Read More</a>
          </div>
          <div className="serv-box">
            <FontAwesomeIcon icon={faBolt} className="serv-icon" />
            <h3 className="serv-title">Energy Analysis</h3>
            <p className="serv-desc">Expert certified BPI analysis for efficient project energy solutions.</p>
            <a className="serv-btn" href="/services">Read More</a>
          </div>
          <div className="serv-box">
            <FontAwesomeIcon icon={faEarthAmericas} className="serv-icon" />
            <h3 className="serv-title">Land Management</h3>
            <p className="serv-desc">Strategic planning of scope, phasing, and project delivery for optimal results.</p>
            <a className="serv-btn" href="/services">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};