import React, { useState } from "react";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import black from "../img/black.png";
import ced from "../img/ced.jpg";
import ProgressBar from "@ramonak/react-progress-bar";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import jasp from "../img/memories/jas";
import { Circles } from "react-loader-spinner";
import Fade from "react-reveal/Fade";

function Abella() {
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
              JASPER CEDRICK ABELLA <br /> - NFT/CRYPTO TRADER
            </h1>
            <ul>
              <li>Birthday: JUNE 22 2000 </li>
              <li>Age: 21</li>
              <li>Address: Mayondon Los Angeles Laguna </li>
              <li>Current: Laguna State Polytechnic University</li>
              <li>SHS: Joy in learning school </li>
              <li>Primary: Vea school inc</li>
            </ul>
            <cite className="cite">" INVEST WHAT YOU DON'T HAVE AND PRAY"</cite>
          </div>
        </Fade>
        <Fade right big>
          <div className="col2">
            <img src={ced} className="sImg" />
            <img src={black} className="bImg" />
          </div>
        </Fade>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ProgressBar
          completed={80}
          customLabel="CRYPTO INDUSTRY"
          width="400px"
          className="skillbar"
        />
        <ProgressBar
          completed={50}
          customLabel="C#"
          width="400px"
          className="skillbar"
        />
        <ProgressBar
          completed={40}
          customLabel="Python"
          width="400px"
          className="skillbar"
        />
        <ProgressBar
          completed={50}
          customLabel="Editing"
          width="400px"
          className="skillbar"
        />
      </div>
      <div className="memories">
        <h1>Featured Photo</h1>
        <div className="memory-container">
          <ImageGallery items={jasp} />
        </div>
      </div>
    </div>
  );
}

export default Abella;
