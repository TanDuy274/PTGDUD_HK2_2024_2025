import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="./assets/imgs/logo.jpg"
            alt="Logo"
            style={{ width: "100px" }}
          />
        </a>

        <form className="d-flex mx-auto">
          <div className="search-box d-flex align-items-center">
            <i className="bi bi-search me-2"></i>
            <input
              className="form-control border-0 bg-transparent"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
        </form>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse justify-content-center ${
            isNavCollapsed ? "" : "show"
          }`}
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">
                What to cook
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Recipes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Ingredients
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Occasions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <button className="recipe-box border-0">📋 Your Recipe Box</button>
          <img
            src="./assets/imgs/avatar.jpg"
            alt="User"
            className="profile-img ms-3"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
