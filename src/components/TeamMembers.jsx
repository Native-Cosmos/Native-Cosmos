import React from "react";
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../css/TeamMember.css";
import { data } from "../data/MemberData";

export const TeamMembers = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    autoplay: true,
    autoplaySpeed: 200000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="teamMembers" id="team">

      <h1>Members</h1>  
      <div className="cards">
        <Slider {...settings}>
          {data.map((item) => (
            <div className="card">
              <div className="imgBox">
                <img src={item.Img} alt={item.name} />
              </div>
              <div className="content">
                <div className="details ">
                  <h2>
                    {item.name} <br /> <span>{item.skill}</span>{" "}
                  </h2>
                  <ul className="sci">
                    <li>
                      <a href={item.gitLink}>
                        <BsGithub />
                      </a>
                    </li>
                    <li>
                      <a href={item.linkedinLink}>
                        <BsLinkedin />
                      </a>
                    </li>
                    <li>
                      <a href={item.instaLink}>
                        <BsInstagram />
                      </a>
                    </li>
                    <li>
                      <a href={item.twitterLink}>
                        <BsTwitter />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
