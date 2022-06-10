import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaLaptopCode } from "react-icons/fa";
import ReactTypingEffect from "react-typing-effect";
import studentData from "../components/studedntData";
import { useNavigate } from "react-router-dom";
import Zoom from "react-reveal/Zoom";

function Home() {
  const navigate = useNavigate();
  return (
    <main>
      <Zoom>
        <div className="text-container">
          <div className="t-row">
            <div className="left-col">
              <div className="text-icon">
                <FaLaptopCode className="faicon" />
              </div>
            </div>
            <div className="right-col">
              <div className="textHead">
                <ReactTypingEffect
                  eraseDelay="2000ms"
                  typingDelay="1000ms"
                  text={["Hello.", "World!!!"]}
                  cursorRenderer={(cursor) => <h1>{cursor}</h1>}
                  displayTextRenderer={(text, i) => {
                    return (
                      <h1>
                        {text.split("").map((char, i) => {
                          const key = `${i}`;
                          return (
                            <span
                              key={key}
                              style={i % 2 === 0 ? { color: "darkviolet" } : {}}
                            >
                              {char}
                            </span>
                          );
                        })}
                      </h1>
                    );
                  }}
                />
                <p>
                  Student Profile Pebsite , in partial fulfillment for ITEL 305
                  System Integration and Architecture 2 , A webpage develop by
                  developers of Laguna states polytechnic university, containing
                  a background of the students.
                </p>
              </div>
              <button className="btn">
                <a href="#onScroll">Explore Us!</a>
              </button>
            </div>
          </div>
        </div>
      </Zoom>
      <Zoom>
        <div className="home-container" id="onScroll">
          <Carousel className="mainSlide">
            {studentData.map((student) => {
              const { img, name, position, routes } = student;
              return (
                <div className="student">
                  <img src={img} className="userImg" />
                  <h2>{name}</h2>
                  <p>{position}</p>
                  <button className="btn" onClick={() => navigate(routes)}>
                    Click me!
                  </button>
                </div>
              );
            })}
          </Carousel>
        </div>
      </Zoom>
    </main>
  );
}

export default Home;
