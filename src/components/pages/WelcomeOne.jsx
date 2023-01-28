import React from "react";
import { welcome_one } from "../../images/";

const WelcomeOne = () => {
  return (
    <div className="d-flex justify-content-between flex-row main-container">
      <div>
        <img alt="welcome" src={welcome_one} className="welcome-one col-md-7" />
      </div>
      <div className="px-5 d-flex align-items-center flex-column col-md-5">
        <div className="welcome-title fs-1 my-5 display-4">
          Your path to a secure finacial future.
        </div>
        <div className="mb-5 pb-5">
          Become a more confident trader and set your path to more secure
          finacial future path. Invest using our easy to-understand smart
          finacial tools.
        </div>
        <div className="col-md-6 mt-5 pt-5">
          <button className="btn welcome-btn text-white  d-flex flex-row justify-content-between align-items-center btn-block col-md-12">
            <span>ENTER OUR WEBSITE</span>
            <i className="fas fa-arrow-circle-right "></i>
          </button>
        </div>
        <div className="rights-text mt-3">
          *All rights reserved. A trader limited. <u>Terms & conditions</u>
        </div>
      </div>
    </div>
  );
};

export default WelcomeOne;
