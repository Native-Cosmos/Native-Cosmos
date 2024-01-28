import React, { useEffect } from "react";
import "../css/About.css";

const About = () => {
  useEffect(() => {
    const about = document.querySelector(".about");

    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <=
          (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    function handleScroll() {
      if (isElementInViewport(about)) {
        about.classList.add("fade-in");
        window.removeEventListener("scroll", handleScroll);
      }
    }

    window.addEventListener("scroll", handleScroll);
    // Initial check in case the element is already in view on page load
    handleScroll();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about">
      <h1 className="about-heading">About Us</h1>
      <p>
      At Native Cosmos, we're a dynamic community of tech enthusiasts joined by a shared love for innovation. Embracing diversity and creativity, we cultivate an environment where ideas thrive and connections flourish. Our mission spans the vast realms of technology, empowering each member to reach new heights, from coding to cutting-edge advancements. United, we celebrate diverse perspectives, aiming to make a cosmic impact in the tech world. Join us on this journey of discovery, collaboration, and limitless possibilities as we navigate the ever-expanding universe of Native Cosmos. Our community transcends boundaries, delving into emerging technologies, hosting knowledge-sharing events, and promoting continuous learning. Committed to inclusivity, we provide a platform for beginners and experts alike to thrive. Native Cosmos is more than a community; it's a dynamic ecosystem where passion meets purpose. Together, we ride the waves of technological evolution, pushing boundaries and crafting a narrative that defines our collective impact on the digital frontier. Join us, and let's forge the future of tech innovation as one interconnected force in the expansive universe of Native Cosmos.
      </p>
    </div>
  );
};

export default About;
