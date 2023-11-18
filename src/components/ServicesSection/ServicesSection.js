export default function ServicesSection() {
  return (
    <section className="serv-section">
      <div className="serv-container">
        <div className="serv-card">
          <div className="serv-lines"></div>
            <div className="serv-img-box">
              <img src="research-100-light.png" alt="Zoning, Land Use, & Research ICON"></img>
            </div>
            <div className="serv-content">
              <div className="serv-details">
                <h2>Zoning, Land Use, & Research</h2>
                <p>
                  Zoning and land use research, Location analysis, Site plan approvals, Conditional use permits, 
                  Zoning ordinance appeals, Zoning ordinance variances, Zoning ordinance amending, Property re-zoning, 
                  Architectural review approvals, Public Works and Transportation Approvals, Zoning violations
                </p>
                <a href="/services">Read More</a>
              </div>
            </div>
        </div>
        <div className="serv-card">
          <div className="serv-lines"></div>
            <div className="serv-img-box">
              <img src="permit-100-light.png" alt="Zoning, Land Use, & Research ICON"></img>
            </div>
            <div className="serv-content">
              <div className="serv-details">
                <h2>Code Enforcement</h2>
                <p>
                  Demolition permits, Building Codes Analysis, Building Permits, Occupancy permits, Special Permits, 
                  Temporary Structures permits, Code violations
                </p>
                <a href="/services">Read More</a>
              </div>
            </div>
        </div>
        <div className="serv-card">
          <div className="serv-lines"></div>
            <div className="serv-img-box">
              <img src="floorplan-80-light.png" alt="Zoning, Land Use, & Research ICON"></img>
            </div>
            <div className="serv-content">
              <div className="serv-details">
                <h2>Design</h2>
                <p>
                  Pre-design work to ensure compliance with the Code, Site plan design, Pre-design work for engineers and architects
                </p>
                <a href="/services">Read More</a>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};