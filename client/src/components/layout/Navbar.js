import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [collaps, setCollaps] = useState(true);

  const toggleNavBar = () => {
    setCollaps(!collaps);
  };

  const classOne = collaps
    ? "collapse navbar-collapse ml-auto"
    : "collapse navbar-collapse show ml-auto";
  const classTwo = collaps
    ? "navbar-toggler navbar-toggler-right collapsed ml-auto"
    : "navbar-toggler navbar-toggler-right ml-auto";

  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand nav-link">
          <h2>Horesbook</h2>
        </Link>
        <button
        onClick={toggleNavBar}
          className={`${classTwo}`}
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="navbar-toggler-icon">
            <div className="navbar-toggler-icon-line" />
            <div className="navbar-toggler-icon-line" />
            <div className="navbar-toggler-icon-line" />
          </div>
        </button>
        <div className={`${classOne}`} id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a to="landing">Home</a>
            </li>
            <li className="nav-item active">
              <a to="landing">Profil</a>
            </li>
            <li className="nav-item active">
              <a to="landing">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
