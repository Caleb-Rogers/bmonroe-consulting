import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpenReader, faGavel, faCompassDrafting, faScaleBalanced, faBolt, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';

export default function ServicesSection() {
  return (
    <section className="serv-section">
      <div className="serv-heading">
        <h1>Our Services: What Monroe Consulting Can Do For YOU</h1>
      </div>
      <div className="serv-container">
        <div className="serv-row">
          <div className="serv-box">
            <FontAwesomeIcon icon={faBookOpenReader} className="serv-icon" />
            <h2>Zoning, Land Use, & Research</h2>
            <p>Comprehensive analysis of zoning regulations and land use potential.</p>
            <a href="/services">Read More</a>
          </div>
          <div className="serv-box">
            <FontAwesomeIcon icon={faScaleBalanced} className="serv-icon" />
            <h2>Environment Permitting & Meeting Representation</h2>
            <p>Skilled representation before architectural review boards for project approvals.</p>
            <a href="/services">Read More</a>
          </div>
          <div className="serv-box">
            <FontAwesomeIcon icon={faGavel} className="serv-icon" />
            <h2>Code Enforcement</h2>
            <p>Diligent adherence to building codes for successful project outcomes.</p>
            <a href="/services">Read More</a>
          </div>
          <div className="serv-box">
            <FontAwesomeIcon icon={faCompassDrafting} className="serv-icon" />
            <h2>Design</h2>
            <p>Collaborative pre-design work ensuring alignment with construction codes.</p>
            <a href="/services">Read More</a>
          </div>
          <div className="serv-box">
            <FontAwesomeIcon icon={faBolt} className="serv-icon" />
            <h2>Energy Analysis</h2>
            <p>Expert certified BPI analysis for efficient project energy solutions.</p>
            <a href="/services">Read More</a>
          </div>
          <div className="serv-box">
            <FontAwesomeIcon icon={faEarthAmericas} className="serv-icon" />
            <h2>Land Management</h2>
            <p>Strategic planning of scope, phasing, and project delivery for optimal results.</p>
            <a href="/services">Read More</a>
          </div>
        </div>
      </div>
    </section>
  );
};