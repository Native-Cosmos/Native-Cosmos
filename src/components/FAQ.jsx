import React from "react";
import "../css/FAQ.css";

const FAQ = () => {
  return (
    <>
      <div className="accordion">
        <h1>Frequently Asked Questions</h1>
        <div className="accordion-item">
          <input type="checkbox" id="accordion1" />
          <label for="accordion1" className="accordion-item-title">
            <span className="icon"></span>How can I get involved in Native
            Cosmos?
          </label>
          <div className="accordion-item-desc">
            Joining Native Cosmos is easy! Simply navigate to our website and
            explore the "Get Involved" section. You can participate in
            hackathons, contribute to projects on GitHub, or engage in
            discussions with fellow members.
          </div>
        </div>

        <div className="accordion-item">
          <input type="checkbox" id="accordion2" />
          <label for="accordion2" className="accordion-item-title">
            <span className="icon"></span>Are there any prerequisites to join
            Native Cosmos?
          </label>
          <div className="accordion-item-desc">
            Native Cosmos is open to all tech enthusiasts, regardless of skill
            level or background. Whether you're a beginner or an experienced
            developer, you're welcome to join our community and contribute to
            the exciting world of technology.
          </div>
        </div>

        <div className="accordion-item">
          <input type="checkbox" id="accordion3" />
          <label for="accordion3" className="accordion-item-title">
            <span className="icon"></span>What types of events does Native
            Cosmos organize?
          </label>
          <div className="accordion-item-desc">
            Native Cosmos hosts a variety of events, including hackathons,
            workshops, webinars, and networking sessions. These events provide
            opportunities to enhance your skills, collaborate with peers, and
            stay updated on the latest tech trends.
          </div>
        </div>

        <div className="accordion-item">
          <input type="checkbox" id="accordion4" />
          <label for="accordion4" className="accordion-item-title">
            <span className="icon"></span>How can I stay informed about upcoming
            events and activities?
          </label>
          <div className="accordion-item-desc">
            Stay connected by following us on social media platforms and
            regularly checking our website for announcements. We also send out
            newsletters with event details, so make sure to subscribe to stay
            informed about all the exciting happenings in Native Cosmos.
          </div>
        </div>

        <div className="accordion-item">
          <input type="checkbox" id="accordion5" />
          <label for="accordion5" className="accordion-item-title">
            <span className="icon"></span>How can I connect with other members
            of Native Cosmos?
          </label>
          <div className="accordion-item-desc">
            Engage with our community on various platforms, including our
            Discord channel and social media groups. Participate in discussions,
            share your knowledge, and connect with like-minded individuals.
            Native Cosmos is not just a community; it's a network of passionate
            tech enthusiasts supporting each other's journeys.
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
