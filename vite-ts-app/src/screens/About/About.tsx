import "./about.scss";
import photo1 from "./osher-photo-one.jpeg";
import photo2 from "./osher-photo-two.jpeg";
import photo3 from "./osher-photo-three.jpeg";

const About = () => {
  return (
    <>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 id="about" className="heading-secondary">
            Hello! I'M Osher
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertairy u-margin-bottom-small">About Me</h3>
            <p className="paragraph">
              A highly motivated FULL STACK developer,{" "}
              <span className="word">Creative</span> thinker who takes the
              initiative for any challenge.
              <br />
              <br />
              Software developer with experience in building end-to-end web
              systems, willing to work hard and looking to leverage my knowledge
              and experience into new challenges while continuing to learn and
              grow.
              <br />
              <br />
              <h6 className="opentowork">#OpenToWork</h6>
              <br />
              <br />
              <br />
            </p>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 1"
                className="composition__photo composition__photo--p1"
                src={photo1}
              />
              <img
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 2"
                className="composition__photo composition__photo--p2"
                src={photo2}
              />
              <img
                sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px"
                alt="Photo 3"
                className="composition__photo composition__photo--p3"
                src={photo3}
              />
              {/*<img src="img/nat-1-large.jpg" alt="Photo 1" className="composition__photo composition__photo--p1" />
            <img src="img/nat-2-large.jpg" alt "Photo 2" className="composition__photo composition__photo--p2" />*/}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
