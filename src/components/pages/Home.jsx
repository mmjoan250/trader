import React from "react";
import { Navbar, RegisterModal } from "../common";

const Home = () => {
  return (
    <div className="container">
      <div className="mx-5 px-5">
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
        <div className="col-md-4">
          <div className="fs-1 my-5 display-4">
            Beginner Traders & Home Users From{" "}
            <span className="dollar">$10</span>
          </div>
          <div className="mb-5">
            Sign Up for our free Easy Trader account and invest using our
            easy-to-understand trading tools.
          </div>
          <div className="d-flex flex-row">
            <RegisterModal/>
            <button className="btn  btn-light border">READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
