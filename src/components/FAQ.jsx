import React, { useState } from "react";
import "../css/FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleToggle = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className="ACC">
        <h1>Frequently Asked Questions</h1>
      <div className="accordion">
        {[1, 2, 3, 4, 5].map((index) => (
          <div
            key={index}
            className={`accordion-item ${
              activeIndex === index ? "active" : ""
            }`}
          >
            <div
              className="accordion-header"
              onClick={() => handleToggle(index)}
            >
              Accordion Item #{index}
              <div
                className={`arrow-icon ${
                  activeIndex === index ? "up" : "down"
                }`}
              >
                &#9650;
              </div>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">
                Content for Accordion Item #{index}. Replace this with your own
                content.
              </div>
            )}
          </div>
        ))}
      </div>
    </ div>
  );
};

export default FAQ;
