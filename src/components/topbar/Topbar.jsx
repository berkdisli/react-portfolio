import "./Topbar.scss";
import PersonIcon from "@mui/icons-material/Person";
import MailIcon from "@mui/icons-material/Mail";

export default function Topbar() {
  return (
    <div className="topbar">
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
            <span>berkdisli@yahoo.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
