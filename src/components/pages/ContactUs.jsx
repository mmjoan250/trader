import React from "react";
import { map } from "../../images";
import { Navbar, Footer } from "../common";

const ContactUs = () => {
  return (
    <div>
      <Navbar contact_active={true} border="border-bottom" />
      <div className="container px-5 d-flex justify-content-center flex-column align-items-center">
        <div className="text-center text-center dollar fw-bold py-3 mt-5">
          CONTACT
        </div>
        <div className="fs-1 my-5 display-4 col-md-7 text-center">
          Let's discuss recommendation solution for your trading investing.
        </div>
        <div className="mb-5 col-md-5 text-center">
          or any additional information you need to know about A-Trader at{" "}
          <u>info@atrader.co.tz</u> or call +255 123 456 789
        </div>
        <div>
          <img src={map} alt="map" className="img-fluid" />
        </div>
        <div
          className="pt-5 col-md-3 d-flex flex-row"
          style={{ fontSize: "12px" }}
        >
          <div className="border p-3">
            <div className="text-center fw-bold">Contact address</div>
            <div className="text-center">
              Tanzanite Park, Seedspace. Dar es salaam
            </div>
          </div>
          <div className="border p-3">
            <div className="text-center fw-bold">Invoicing address</div>
            <div className="text-center">
              Tanzanite Park, Seedspace. Dar es salaam
            </div>
          </div>
        </div>
        <div className="fw-bold text-center pt-5 pb-3">
          Get in touch on social media
        </div>
        <div className="d-flex justify-content-between col-md-2 pb-5">
          <div style={{ cursor: "pointer" }}>
            <i className="fa-brands fa-facebook fa-xl"></i>
          </div>
          <div style={{ cursor: "pointer" }}>
            <i className="fa-brands fa-instagram fa-xl"></i>
          </div>
          <div style={{ cursor: "pointer" }}>
            <i className="fa-brands fa-twitter fa-xl"></i>
          </div>
          <div style={{ cursor: "pointer" }}>
            <i className="fa-brands fa-linkedin fa-xl"></i>
          </div>
        </div>
        <div className="display-6 pt-3 pb-6">Subscribe to our newsletter!!</div>
        <div className="d-flex justify-content-between col-md-8 align-items-center my-5">
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Full Name*"
            />
          </div>
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Email Address*"
            />
          </div>
          <div>
            <button className="btn btn-common text-white">SIGN UP NOW</button>
          </div>
        </div>
        <div className="col-md-9 my-5">
          <Footer/>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
