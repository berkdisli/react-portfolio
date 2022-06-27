import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Engineer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/berk.jpeg" alt="berk" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Berk Disli</h1>
          <h3>
            Full Stack <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/arrowDown.png" alt="arrow-down" />
        </a>
      </div>
    </div>
  );
}
