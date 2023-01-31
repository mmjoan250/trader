import React from "react";
import {
  Navbar,
  CompareCard,
  Pricing,
  Features,
  Support,
  Questions,
} from "../common";

const Compare = () => {
  return (
    <div>
      <Navbar accounts_active={true} border="border-bottom" />
      <div className="container mb-5 px-5 d-flex justify-content-center flex-column align-items-center text-muted">
        <div className="text-center text-center dollar fw-bold py-3 mt-5">
          COMPARE
        </div>
        <div className="fs-1 mb-5 display-4 col-md-7 text-center">
          Options for every trader
        </div>
        <div className="container border compare-bg">
          <div className="d-flex justify-content-between">
            <CompareCard
              btn_text="CALL US"
              title="Need help?"
              content="Talk with our support team who are ready to help"
              btn_color="btn-white text-danger border white-btn px-3"
            />
            <CompareCard
              btn_text="GET STARTED"
              title="Easy Trader"
              content="Quick and easy online trading"
              learn="Learn more"
              btn_color="btn-common text-white"
            />
            <CompareCard
              btn_text="GET STARTED"
              title="Frequent Trader"
              content="Instant notifications & updates"
              learn="Learn more"
              btn_color="btn-common text-white"
            />
            <CompareCard
              btn_text="GET STARTED"
              title="Professional Trader"
              content="Advanced simulated trading & analytics"
              learn="Learn more"
              btn_color="btn-common text-white"
            />
            <CompareCard
              btn_text="GET STARTED"
              title="Premium Investor"
              content="Advanced features with high net worth investing"
              learn="Learn more"
              btn_color="btn-common text-white"
            />
          </div>
          <div className="p-3 fw-bold">Pricing</div>
          <Pricing />
          <div className="p-3 fw-bold">Features</div>
          <Features />
          <div className="p-3 fw-bold">Support and services</div>
          <Support />
        </div>
        <div className="text-center my-4">
          <u>Tanzanian trading fee disclosures</u>
        </div>

        <div className="fs-1 my-5 display-6 col-md-7 text-center">
          Commonly asked questions
        </div>
        <div className="col-md-7">
          <Questions />
        </div>
      </div>
    </div>
  );
};

export default Compare;
