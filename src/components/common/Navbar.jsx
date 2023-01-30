import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../images";
import classNames from "classnames";

const Navbar = ({
  home_active,
  contact_active,
  border,
  accounts_active,
  about_active,
  news_active,
}) => {
  return (
    <nav className={classNames("navbar navbar-expand-lg  fw-bold", border)}>
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
                className={classNames(
                  "nav-link pe-5 me-1",
                  home_active ? "active" : ""
                )}
                aria-current="page"
                to="/home"
              >
                {home_active ? <u>Home</u> : "Home"}
              </Link>
              <Link
                className={classNames(
                  "nav-link pe-5 me-1",
                  about_active ? "active" : ""
                )}
                to="/about-us"
              >
                {about_active ? <u>About Us</u> : "About Us"}
              </Link>
              <Link
                className={classNames(
                  "nav-link pe-5 me-1",
                  accounts_active ? "active" : ""
                )}
                to="/accounts"
              >
                {accounts_active ? <u>Accounts</u> : "Accounts"}
              </Link>
              <Link
                className={classNames(
                  "nav-link pe-5 me-1",
                  news_active ? "active" : ""
                )}
                to="/news"
              >
                {news_active ? <u>News</u> : "News"}
              </Link>
              <Link
                className={classNames(
                  "nav-link",
                  contact_active ? "active" : ""
                )}
                to="/contact-us"
              >
                {contact_active ? <u>Contact Us</u> : "Contact Us"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
