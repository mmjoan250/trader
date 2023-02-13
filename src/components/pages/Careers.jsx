import React from "react";
import { Navbar } from "../common";

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
    </div>
  );
};

export default Careers;
