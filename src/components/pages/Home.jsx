import React from "react";
import { Navbar } from "../common";

const Home = () => {
  return (
    <div className="container">
      <Navbar home_active={true} />
      <div className="d-flex justify-content-between shadow rounded col-md-11 mt-3">
        <div className="py-3 d-flex justify-content-between col-md-8 px-3">
          <div style={{ cursor: "pointer" }}>Accounts</div>
          <div style={{ cursor: "pointer" }}>Liveshare</div>
          <div style={{ cursor: "pointer" }}>Portfolio</div>
          <div style={{ cursor: "pointer" }}>Manage</div>
          <div style={{ cursor: "pointer" }}>Account services</div>
        </div>

        <button className="btn btn-common px-5 text-white">LOGIN NOW</button>
      </div>
    </div>
  );
};

export default Home;
