import React from "react";
import { Navbar, Footer, CareerCard } from "../common";
import { account_one } from "../../images";
import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div>
      <Navbar careers_active={true} border="border-bottom" />
      <div className="career-header text-white">
        <div className="d-flex align-items-center container pt-5 ">
          <div className="mt-5 col-md-5">
            <div className="fw-bold fs-2 mt-5 pt-5 display-4">Careers</div>
            <div className="fs-5 fw-bold fs-5">
              Join our dynamic and experienced professionals at one of the
              world’s leading tradding companies.
            </div>
          </div>
        </div>
      </div>

      <div className="my-3 container d-flex flex-row">
        <div className="me-3">
          <img
            alt="career"
            src={account_one}
            className="image-fluid career-image"
            // height="200"
          />
        </div>
        <div className="col-md-6">
          <div>
            <div className="pb-3">
              <Link
                className="btn btn-common text-white fw-bold"
                to="/hr-portal"
              >
                Add a Job
              </Link>
              <small className="ms-2 text-muted">
                (Add a job button will only be visible by the HR once the
                backend side is implemented)
              </small>
            </div>
            <div className="display-6 dollar">Oppotunities of the Month</div>
          </div>
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
          <CareerCard />
        </div>
      </div>
      <div className="container mt-5">
        <Footer />
      </div>
    </div>
  );
};

export default Careers;
