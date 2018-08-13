import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact-container">
      <section className="contact">
        <h1 className="title">Contact</h1>
        <section className="contact-info">
          <p>
            <a href="mailto:gabe.f.ng@gmail.com?Subject=Hello!">
              gabe.f.ng@gmail.com
            </a>
          </p>

          <ul className="icons">
            <li>
              <a href="http://www.github.com/gabe-ng" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github" />
              </a>
            </li>
            <li>
              <a href="http://www.linkedin.com/in/gabriel-n" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in" />
              </a>
            </li>
            <li>
              <a href="http://www.facebook.com/gabengatcal" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="mailto:gabe.f.ng@gmail.com?Subject=Hello!">
                <i className="far fa-envelope" />
              </a>
            </li>
          </ul>
        </section>
      </section>
    </section>
  );
};

export default Contact;
