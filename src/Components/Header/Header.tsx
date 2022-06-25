import { NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import "./header.scss";
const Header = () => {
  const navLinkStyles = { textDecoration: "none", color: "black" };
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div className="header__links">
        <NavLink style={navLinkStyles} to="/">
          Home
        </NavLink>
        <NavLink style={navLinkStyles} to="/exercises">
          Exercises
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
