import "./Works.scss";

export default function Works() {
  return (
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/65/65680.png"
                    alt="mobilepic"
                  />
                </div>
                <h2>Title</h2>
                <p>asfsagagasgas ahsfbsahfbsabfsaömnbfsamnbfmasnbf</p>
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
      </div>
      <img
        className="arrow left"
        src="https://icon-library.com/images/arrow-icon-white/arrow-icon-white-29.jpg"
        alt="leftarrow"
      />
      <img
        className="arrow right"
        src="https://icon-library.com/images/arrow-icon-white/arrow-icon-white-29.jpg"
        alt="rightarrow"
      />
    </div>
  );
}
