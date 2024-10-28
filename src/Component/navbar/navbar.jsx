import { NavLink } from "react-router-dom";
import  "./navbar.css"






const Navbar = () => {
  const linkStyle = {
    color: "blue",
    textDecoration: "none",
  };
  const liStyle = {
    margin: "10px",
  };
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
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
