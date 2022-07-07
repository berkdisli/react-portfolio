import "./Intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1200,
      backSpeed: 90,
      strings: ["Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img
            src="https://berkdisli.github.io/portfolio/img/berk.jpeg"
            alt="berk"
          />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Berk Disli</h1>
          <h3>
            Software <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img
            src="https://d29fhpw069ctt2.cloudfront.net/icon/image/39091/preview.png"
            alt="arrow-down"
          />
        </a>
      </div>
    </div>
  );
}
