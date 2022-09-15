import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="pb-5">
      <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand mx-3 fs-3 fw-bolder text-primary" to="/">
            NewsApp
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Politics
                </Link>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <button className="btn btn-primary mx-2" type="submit">
                <Link to="/login" className="login_btn">Login</Link>
              </button>
              <button className="btn btn-primary mx-2" type="submit">
                <Link to="/signup" className="signup_btn">Signup</Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
