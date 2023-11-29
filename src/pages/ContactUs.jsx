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
              src="https://media.istockphoto.com/id/1161814148/pt/vetorial/contact-us-purple-background.jpg?s=170667a&w=0&k=20&c=8UDPLStmsmYCWaCv_2MINcGtqBsUSF1zfPx2fTG3O-o="
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
