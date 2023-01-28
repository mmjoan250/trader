import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../images";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg text-white border-bottom fw-bold">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img alt="logo" src={logo} height="60" />
        </Link>
        <button
          className="navbar-toggler text-white bg-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="col-md-12 d-flex  justify-content-end pe-5 me-5">
            <div className="navbar-nav pe-5 me-5">
              <Link
                className="nav-link active pe-5 me-1"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
              <Link className="nav-link pe-5 me-1" to="/about-us">
                About Us
              </Link>
              <Link className="nav-link pe-5 me-1" to="/accounts">
                Accounts
              </Link>
              <Link className="nav-link pe-5 me-1" to="/news">
                News
              </Link>
              <Link className="nav-link" to="/contact-us">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;