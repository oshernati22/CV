import "./projects.scss";

const Projects = () => {
  return (
    <div className="projects-section">
      <section className="section-projects">
        <div className="u-center-text u-margin-bottom-big">
          <h2 id="projects" className="heading-secondary">
            My Projects
          </h2>
          <h6 className="opentowork">#OpenToWork</h6>
        </div>
        <div className="row">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    {" "}
                    e-commerce website
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Tech: React.js, Node.js</li>
                    <li>Database: FIREBASE</li>
                    <li>Year: 2020</li>
                    <li>Reason: Final Project</li>
                    <li>Duration: 2 Months</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Move TO</p>
                    <p className="card__price-value">Project</p>
                  </div>
                  <a
                    href="https://rebuy.netlify.app/"
                    target="_blank"
                    className="btn btn--white"
                  >
                    Click Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">
                    flight boards website
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Tech: Html, Css, JavaScript, Bootstrap, C#</li>
                    <li>Database: SQL</li>
                    <li>Year: 2019</li>
                    <li>Reason: School</li>
                    <li>Duration: 2 Weeks</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Move TO</p>
                    <p className="card__price-value">Project</p>
                  </div>
                  <a
                    target="_blank"
                    href="https://github.com/oshernati22/FlightsBoard-website"
                    className="btn btn--white"
                  >
                    Click Here
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">&nbsp;</div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">
                    Investments website
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>
                      Tech: Html, Css, JavaScript, Bootstrap, React.js, Node.js
                    </li>
                    <li>Database: MongoDB</li>
                    <li>Year: 2020</li>
                    <li>Reason: School</li>
                    <li>Duration: 2 Weeks</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Move To</p>
                    <p className="card__price-value">Project</p>
                  </div>
                  <a
                    target="_blank"
                    href="https://github.com/oshernati22/Investock"
                    className="btn btn--white"
                  >
                    Click Here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-center-text u-margin-top-big">
          <a
            href="https://github.com/oshernati22"
            target="_blank"
            className="btn btn--green"
          >
            Discover all Projects
          </a>
        </div>
      </section>
    </div>
  );
};

export default Projects;
