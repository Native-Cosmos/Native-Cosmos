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
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. A incidunt
        corporis modi magni placeat pariatur. Tenetur, aspernatur quaerat sed
        modi non, laboriosam temporibus nisi esse dolores explicabo natus facere
        asperiores eligendi nulla quisquam, perferendis nobis excepturi aperiam
        assumenda distinctio omnis labore. Officia ipsum quo facilis pariatur
        unde consequatur a doloremque quam. Itaque, consequuntur dolor accusamus
        libero nostrum tempore totam adipisci placeat quaerat ab veritatis
        quidem ullam culpa id alias. Est ducimus modi ipsum non. Quos nobis ea
        animi quidem recusandae. Ipsa dolorem, ut necessitatibus ad ea vero
        magni earum, modi culpa, aperiam minima. Eius in hic nesciunt magnam
        autem ex, reprehenderit tempore recusandae quasi quaerat beatae, error
        laborum tenetur voluptatibus architecto odit perferendis dolorem?
        Excepturi consequuntur et architecto explicabo modi, adipisci nostrum
        dolorem atque distinctio veritatis numquam quia illum deleniti.
        Praesentium qui, deserunt a sunt cupiditate aperiam accusamus possimus
        tenetur cumque voluptas dicta culpa, molestiae ipsam! Ut unde odio
        eaque.
      </p>
    </div>
  );
};

export default About;
