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
    // <div className="contact-us">
    //   <h1>Contact Us</h1>
    //   <div className="contact-us-container">
    //     <div className="contact-card">
    //       <div className="logo-section">
    //         <img
    //           src="https://media.istockphoto.com/id/1161814148/pt/vetorial/contact-us-purple-background.jpg?s=170667a&w=0&k=20&c=8UDPLStmsmYCWaCv_2MINcGtqBsUSF1zfPx2fTG3O-o="
    //           alt="Company Logo"
    //         />
    //       </div>
    //       <div className="content-section">
    //         <h3>Did we miss something?</h3>
    //         <p>Reach out to us</p>
    //         <div className="social-icons">
    //         <a  href="https://twitter.com/NativeCosmos"><FontAwesomeIcon icon={faTwitter} /></a>
    //         <a  href="https://www.linkedin.com/company/native-cosmos/"><FontAwesomeIcon icon={faLinkedin} /></a>
    //         <a  href="https://discord.gg/ER9xsCrKQu"><FontAwesomeIcon icon={faDiscord} /></a>
    //         </div>
    //         <div className="input-section">
    //           <input type="text" placeholder="For more updates" />
    //           <button className="submit-button" type="submit">
    //             Submit
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <section>
      <div class="section-header">
        <div class="container">
          <h1>Contact Us</h1>
        </div>

        <div className="parent">
          <div class="container">
            {/* <div class="row"> */}
            <div class="map_bind">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d471220.5631094339!2d76.6883117!3d30.7322544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed0be66ec96b%3A0xa5ff67f9527319fe!2sChandigarh!5e0!3m2!1sen!2sin!4v1596988408134!5m2!1sen!2sin
                "
                style={{
                  width: "100%",
                  height: "100%",
                  frameborder: "0",
                  border: "0",
                  allowfullscreen: "",
                  ariaHidden: "false",
                  tabindex: "0",
                }}
              ></iframe>
            </div>
            {/* </div> */}
          </div>

          <div class="contact-form">
            <div>
              <h2>Did we miss anything?</h2>
            </div>

            <div>
              <h3>Reach out to us at :</h3>
              <span className="email">nativexcosmos@gmail.com</span>
            </div>
            <div className="social-icons">
              <a href="https://twitter.com/NativeCosmos">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.linkedin.com/company/native-cosmos/">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://discord.gg/ER9xsCrKQu">
                <FontAwesomeIcon icon={faDiscord} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
