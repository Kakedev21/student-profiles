import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import black from "../img/black.png";
import ja from "../img/ja2.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
import jamp from "../img/memories/jam";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Fade from "react-reveal/Fade";
import { Circles } from "react-loader-spinner";

function Catedrilla() {
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
              John Arnold Catedrilla <br /> - Web developer
            </h1>
            <ul>
              <li>Birthday: March 21 2001</li>
              <li>Age: 21</li>
              <li>Address: Bambang Los Baños Laguna</li>
              <li>Current: Laguna State Polytechnic University </li>
              <li>SHS: STI College Calamba</li>
              <li>Secondary: Los Baños National High School(Poblacion)</li>
              <li>Primary: Los Baños Central Elementary School</li>
            </ul>
            <cite className="cite">"just code, no motivational quotes"</cite>
          </div>
        </Fade>
        <Fade right big>
          <div className="col2">
            <img src={ja} className="sImg" />
            <img src={black} className="bImg" />
          </div>
        </Fade>
      </div>
      <Fade bottom big>
        <div className="skills">
          <h2>Skills</h2>
          <ProgressBar
            completed={80}
            customLabel="HTML"
            width="400px"
            className="skillbar"
          />
          <ProgressBar
            completed={75}
            customLabel="CSS"
            width="400px"
            className="skillbar"
          />
          <ProgressBar
            completed={80}
            customLabel="JavaScript"
            width="400px"
            className="skillbar"
          />
          <ProgressBar
            completed={65}
            customLabel="ReactJs"
            width="400px"
            className="skillbar"
          />
          <ProgressBar
            completed={50}
            customLabel="NodeJs"
            width="400px"
            className="skillbar"
          />
        </div>
      </Fade>
      <Fade bottom big>
        <div className="memories">
          <h1>Featured Photo</h1>
          <div className="memory-container">
            <ImageGallery items={jamp} />
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default Catedrilla;
