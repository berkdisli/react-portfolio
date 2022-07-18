import "./Works.scss";
import { useState } from "react";

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon: "https://cdn-icons-png.flaticon.com/512/65/65680.png",
      title: "MyFlix React",
      desc: "safasf",
      img: "https://berkdisli.github.io/portfolio/img/myflixclient.png",
    },
    {
      id: 2,
      icon: "",
      title: "Pokédex",
      desc: "safasf",
      img: "https://berkdisli.github.io/portfolio/img/pokedex.png",
    },
    {
      id: 3,
      icon: "",
      title: "MyFlix Angular",
      desc: "safasf",
      img: "https://berkdisli.github.io/portfolio/img/myflix-angular.png",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
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
