import React from "react";
import My3Dcomponent from "../components/My3Dcomponent";
import "../css/Home.css";

const Home = () => {
  return (
    // <div className="homepage">
    //   <div className="grid-container">
    //     <div className="left">
    //       <My3Dcomponent />
    //     </div>
    //     <div className="right">
    //       <div className="content">
    //         <div className="text-container">
    //           <h1>Your Punchline Goes Here</h1>
    //           <h2>Community Name</h2>
    //           <p>Upcoming Hackathon Name</p>
    //         </div>

    //         <div className="buttons">
    //           <button className="apply-button">Apply</button>
    //           <button className="discord-button">Join Discord</button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="homepage">
      <div className="background">
        <My3Dcomponent />
      </div>
      <div className="overlay-content">
        <h1>Your Punchline Goes Here</h1>
        <h2>Community Name</h2>
        <p>Upcoming Hackathon Name</p>
        <div className="buttons">
          <button className="apply-button">Apply</button>
          <button className="discord-button">Join Discord</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
