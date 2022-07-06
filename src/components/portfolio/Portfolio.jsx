import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";
import { webPortfolio, mobilePortfolio, ggPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("web");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "mobile",
      title: "Mobile App",
    },
    {
      id: "mobile",
      title: "gg App",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "web":
        setData(webPortfolio);
        break;
      case "web":
        setData(mobilePortfolio);
        break;
      case "web":
        setData(ggPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="myflixpng" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
