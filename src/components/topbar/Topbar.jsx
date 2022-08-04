import "./Topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            berk*
          </a>
          <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>+49 1638614308</span>
          </div>
          <div className="itemContainer">
            <MailIcon />
            <span>
              <a
                className="mail"
                href="mailto:berkdisli@yahoo.com?subject=Testsubject&body=Hi!%20This%20is%20a%20test.%0D%0AHow%20are%20you%3F"
              >
                <p>berkdisli@yahoo.com</p>
              </a>
            </span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
