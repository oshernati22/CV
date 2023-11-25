import React from "react";

import "./contact.scss";
import emailjs, { init } from "@emailjs/browser";
import { Link } from "react-scroll";

const Contact: React.FC = () => {
  init("aawSMP5dktj9X4RHG"); // Initialize emailjs with your user ID

  function sendEmail(e: React.FormEvent) {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    emailjs.sendForm("service_bqx7crp", "template_ju647gk", target).then(
      () => {
        alert("The message was received");
        target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  }

  return (
    <div className="contact-section">
      <section className="section-book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form onSubmit={sendEmail} action="#" className="form">
                <div
                  style={{ textAlign: "left" }}
                  className="u-center-text u-margin-bottom-big"
                >
                  <h2 id="contact" className="heading-secondary">
                    Contact Me
                  </h2>
                  <br />
                  <Link to="footer" className="details">
                    For More Details Click Here
                  </Link>
                </div>

                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Full Name"
                    id="name"
                    name="name"
                    required
                  />
                  <label htmlFor="name" className="form__label">
                    Full Name
                  </label>
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    className="form__input"
                    placeholder="Email Address"
                    name="email"
                    id="email"
                    required
                  />
                  <label htmlFor="email" className="form__label">
                    Email Address
                  </label>
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    className="form__input"
                    placeholder="Subject"
                    name="subject"
                    id="subject"
                    required
                  />
                  <label htmlFor="subject" className="form__label">
                    Subject
                  </label>
                </div>
                <div className="form__group">
                  <textarea
                    style={{ padding: "4rem 2rem" }}
                    className="form__input"
                    name="message"
                    placeholder="Message"
                    id="message"
                    required
                  />
                  <label htmlFor="message" className="form__label">
                    Message
                  </label>
                </div>
                <div className="form__group">
                  <input
                    type="submit"
                    className="btn btn--green"
                    value="Send Message"
                  ></input>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
