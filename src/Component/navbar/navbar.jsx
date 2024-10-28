import { NavLink } from "react-router-dom";
import  "./navbar.css"
import { useContext } from "react";
import { UserDetails } from "../../navigation/navigation-stack";






const Navbar = () => {
  const {darkTheme}=useContext(UserDetails)
  const linkStyle = {
    color: "blue",
    textDecoration: "none",
  };
  const liStyle = {
    margin: "10px",
  };
  return (
    <>
      <nav className={`navbar navbar-expand-sm bg-${darkTheme ? "light" : "dark"} navbar-${darkTheme ? "dark" : "light"}`}>
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item" style={liStyle}>
              <NavLink  to={"/"}>
                Main
              </NavLink>
            </li>
            <li className="nav-item" style={liStyle}>
              <NavLink   to={"/about"}>About</NavLink>
            </li>
            <li className="nav-item" style={liStyle}>
              <NavLink   to={"/category"}>category</NavLink>
            </li>
            <li className="nav-item" style={liStyle}>
              <NavLink   to={"/Products"}>Products</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
