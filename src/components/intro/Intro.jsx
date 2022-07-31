import "./Intro.scss";
import Typewriter from "typewriter-effect";

export default function Intro() {
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
          <h2>Hi there, I'm</h2>
          <h1>Berk Disli</h1>
          <h3>
            Software
            <span>
              <Typewriter
                options={{
                  strings: ["Developer", "Entwickler"],
                  autoStart: true,
                  delay: 70,
                  loop: true,
                }}
              />
            </span>
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
