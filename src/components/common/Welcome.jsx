import React from "react";
import { Link } from "react-router-dom";

const Welcome = ({ heading, content, image, to }) => {
  return (
    <div className="d-flex justify-content-between flex-row main-container">
      <div>
        <img alt="welcome" src={image} className="welcome-one col-md-7" />
      </div>
      <div className="px-5 d-flex align-items-center flex-column col-md-5">
        <div className="welcome-title fs-1 my-5 display-4">{heading}</div>
        <div className="mb-5 pb-5">{content}</div>
        <div className="col-md-6 mt-5 pt-5">
          <Link
            className="btn welcome-btn text-white  d-flex flex-row justify-content-between align-items-center btn-block col-md-12"
            to={to}
          >
            <span>ENTER OUR WEBSITE</span>
            <i className="fas fa-arrow-circle-right "></i>
          </Link>
        </div>
        <div className="rights-text mt-3">
          *All rights reserved. A trader limited.{" "}
          <u style={{ cursor: "pointer" }}>Terms & conditions</u>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
