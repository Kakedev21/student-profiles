import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import black from "../img/black.png";
import ProgressBar from "@ramonak/react-progress-bar";
import Fade from "react-reveal/Fade";
import van1 from "../img/van1.jpg";
import lumanImg from "../img/memories/luman";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Circles } from "react-loader-spinner";

function Vanessa() {
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
            <h1>Maria Vanessa L. Lumanlan</h1>
            <ul>
              <li>Birthday: May 14, 1998 </li>
              <li>Age: 24</li>
              <li>Address: Bambang Los Baños Laguna </li>
              <li>SHS: Current: Laguna State Polytechnic University</li>
              <li>Laguna State Polytechnic University</li>
              <li>Secondary: Los Baños National High School</li>
              <li>Primary: Los Baños Central Elementary School</li>
            </ul>
          </div>
        </Fade>
        <Fade right big>
          <div className="col2">
            <img src={van1} className="sImg" />
            <img src={black} className="bImg" />
          </div>
        </Fade>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ProgressBar
          completed={30}
          customLabel="Html "
          width="400px"
          className="skillbar"
        />
        <ProgressBar
          completed={30}
          customLabel="Css "
          width="400px"
          className="skillbar"
        />
        <ProgressBar
          completed={20}
          customLabel="C#"
          width="400px"
          className="skillbar"
        />
        <ProgressBar
          completed={40}
          customLabel="Python "
          width="400px"
          className="skillbar"
        />
      </div>
      <div className="memories">
        <h1>Featured Photo</h1>
        <div className="memory-container">
          <ImageGallery items={lumanImg} />
        </div>
      </div>
    </div>
  );
}

export default Vanessa;
