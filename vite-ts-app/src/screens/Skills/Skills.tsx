
import "./skills.scss";

const Skills = () => {
  return (
    <div className="skills-section">
      <section className="section-features">
        <div className="row" id="skills">
          <div className="col-2-of-4">
            <div className="feature-box">
              <h3
                style={{ fontSize: "4rem" }}
                className="heading-tertiary u-margin-bottom-small"
              >
                BUSINESS
              </h3>
              <i className="feature-box__icon icon-basic-world" />
              <p style={{ fontSize: "2rem" }} className="feature-box__text">
                <p> TS, C#</p>
                <p>NODE.JS, .NET CORE</p>
                <p>RABITMQ, REDIS</p>
                <p>PRISMA, EF CORE , SQL</p>
              </p>
            </div>
          </div>
          <div className="col-2-of-4">
            <div className="feature-box">
              <h3
                style={{ fontSize: "4rem" }}
                className="heading-tertiary u-margin-bottom-small"
              >
                PLEASURE
              </h3>
              <i className="feature-box__icon icon-basic-heart" />
              <p style={{ fontSize: "2rem" }} className="feature-box__text">
                <p>CSS, SASS, JSS</p>

                <p>REACT, MOBX</p>

                <p>
                  <br />
                </p>
                <p>
                  <br />
                </p>
              </p>
            </div>
          </div>
        </div>
        <h6 className="opentowork">#OpenToWork</h6>
      </section>
    </div>
  );
};

export default Skills;
