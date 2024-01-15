import "../../Styles/styles.css";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  const styleNavLink = ({ isActive }) => ({
    textDecoration: isActive ? "underline #ff2800" : "none",
    textShadow: isActive ? "none" : "",
    color: isActive ? "#ff2800" : "black",
  });
  return (
    <div className="nav_bar_container">
      <div>
        <img
          src="https://logodownload.org/wp-content/uploads/2016/11/formula-1-logo-5-3.png"
          alt=""
        />
      </div>
      <div className="input-search-container">
        <input type="text" />
        <button type="submit">Search</button>
      </div>
      <div>
        <ul>
          <li>
            <NavLink to="/home" style={styleNavLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="../createDriver" style={styleNavLink}>
              Create Driver
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
