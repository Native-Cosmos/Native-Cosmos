import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
import "../css/ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="contact-us-container">
        <div className="contact-card">
          <div className="logo-section">
            <img
              src="https://www.shutterstock.com/image-illustration/contact-us-stack-colorful-cubes-260nw-1549177559.jpg"
              alt="Company Logo"
            />
          </div>
          <div className="content-section">
            <h3>Did we miss something?</h3>
            <p>Reach out to us</p>
            <div className="social-icons">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faLinkedin} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faDiscord} />
            </div>
            <div className="input-section">
              <input type="text" placeholder="For more updates" />
              <button className="submit-button" type="submit">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
