import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import black from "../img/black.png";
import ProgressBar from "@ramonak/react-progress-bar";
import Fade from "react-reveal/Fade";
import rona from "../img/rona.jpg";
import lumanImg from "../img/memories/luman";
import ronImg from "../img/memories/RonImg";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Circles } from "react-loader-spinner";

function Ronald() {
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
              Ronald Andrei S. Portugal <br /> - Web Developer
            </h1>
            <cite>"If you think math is hard, try web design"</cite>
            <ul>
              <li>Birthday: May 19, 2001 </li>
              <li>Age: 21</li>
              <li>Address: Sta. Rosa Laguna </li>
              <li>Current: Laguna State Polytechnic University</li>
              <li>SHS: Jesus The Exalted Name</li>
              <li>Secondary: Jesus The Exalted Name </li>
              <li>Primary: Labas Elementary School</li>
            </ul>
          </div>
        </Fade>
        <Fade right big>
          <div className="col2">
            <img src={rona} className="sImg" />
            <img src={black} className="bImg" />
          </div>
        </Fade>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ProgressBar
          completed={70}
          customLabel="Html "
          width="400px"
          className="skillbar"
        />
        <ProgressBar
          completed={70}
          customLabel="Css "
          width="400px"
          className="skillbar"
        />
        <ProgressBar
          completed={20}
          customLabel="Python"
          width="400px"
          className="skillbar"
        />
        <ProgressBar
          completed={30}
          customLabel="PHP  "
          width="400px"
          className="skillbar"
        />
      </div>
      <div className="memories">
        <h1>Featured Photo</h1>
        <div className="memory-container">
          <ImageGallery items={ronImg} />
        </div>
      </div>
    </div>
  );
}

export default Ronald;
