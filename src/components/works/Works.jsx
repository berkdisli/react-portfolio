import "./Works.scss";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon: "https://cdn-icons-png.flaticon.com/512/244/244989.png",
      title: "Hotel Website",
      desc: "Created and built a web application for the tourism and hospitality sector.",
      TechStack: "HTML, CSS, JavaScript, Google Maps, Weather API",
      img: "https://berkdisli.github.io/portfolio/img/myflixclient.png",
    },
    {
      id: 2,
      icon: "",
      title: "Pokédex",
      desc: "safasf",
      TechStack: "HTML,CSS basic javascript, Google Maps, Weather API",
      img: "https://berkdisli.github.io/portfolio/img/pokedex.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 1)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="mobilepic" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <p className="techStack">Tech Stack: </p>
                  <p>{d.TechStack}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://www.pngarts.com/files/7/Web-Design-PNG-Picture.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        className="arrow left"
        src="https://icon-library.com/images/arrow-icon-white/arrow-icon-white-29.jpg"
        alt="leftarrow"
        onClick={() => handleClick("left")}
      />
      <img
        className="arrow right"
        src="https://icon-library.com/images/arrow-icon-white/arrow-icon-white-29.jpg"
        alt="rightarrow"
        onClick={() => handleClick()}
      />
    </div>
  );
}
