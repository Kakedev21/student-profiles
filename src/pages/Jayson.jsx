import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import black from "../img/black.png";
import haker from "../img/haker.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
import Fade from "react-reveal/Fade";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Circles } from "react-loader-spinner";
import hakerr from "../img/memories/hakerr";

function Jayson() {
  const [data, setData] = useState(0);
  setTimeout(() => {
    setData(1);
  }, 900);
  if (data === 0) {
    return <Circles color="#371B58" height={80} width={80} />;
  }

  return (
    <div className="sContainer">
      <nav className="SNav">
        <ul>
          <li>
            <a href="">
              <FaFacebook className="sIcon" />
            </a>
          </li>
          <li>
            <a href="">
              <FaGithub className="sIcon" />
            </a>
          </li>
          <li>
            <a href="">
              <FaInstagram className="sIcon" />
            </a>
          </li>
        </ul>
      </nav>
      <div className="srow">
        <Fade left big>
          <div className="col1">
            <h1>
              JAYSON SAN BUENAVENTURA <br /> - Junior Penetration Tester,
              Security Researcher, Bug Bounty Hunter.
            </h1>
            <ul>
              <li>Birthday: June 4, 2000 </li>
              <li>Age: 22</li>
              <li>Address: Brgy. Pansol, Calamba City </li>
              <li>Current: Laguna State Polytechnic University</li>
              <li>SHS: Saints John and Paul Educational Foundation Inc.</li>
              <li>Secondary: St. John Colleges </li>
              <li>Primary: Bucal Elementary School </li>
            </ul>
            <cite className="cite">"No system is safe!"</cite>
          </div>
        </Fade>
        <Fade right big>
          <div className="col2">
            <img src={haker} className="sImg" />
            <img src={black} className="bImg" />
          </div>
        </Fade>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ProgressBar
          completed={99}
          customLabel="LINUX"
          width="400px"
          className="skillbar"
        />
        <ProgressBar
          completed={70}
          customLabel="Python"
          width="400px"
          className="skillbar"
        />
        <ProgressBar
          completed={70}
          customLabel="Bash"
          width="400px"
          className="skillbar"
        />
        <ProgressBar
          completed={60}
          customLabel="Penetration Testing"
          width="400px"
          className="skillbar"
        />
      </div>
      <div className="memories">
        <h1>Featured Photo</h1>
        <div className="memory-container">
          <ImageGallery items={hakerr} />
        </div>
      </div>
    </div>
  );
}

export default Jayson;
