import React from "react";

const Questions = () => {
  return (
    <>
      <div className="col-md-12 py-4">
        <div className="border-bottom d-flex justify-content-between align-items-center">
          <span className="fw-bold">Are trading secure?</span>
          <i
            className="fas fa-chevron-down"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExample"
            aria-expanded="false"
            style={{cursor: "pointer"}}
            aria-controls="collapseExample"
          ></i>
        </div>
        <div className="collapse" id="collapseExample">
          <div className="card card-body">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </div>
      <div className="col-md-12 pb-4">
        <div className="border-bottom d-flex justify-content-between align-items-center">
          <span className="fw-bold">
            How do I receive my return over investment?
          </span>
          <i
            className="fas fa-chevron-down"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExampleTwo"
            aria-expanded="false"
            style={{cursor: "pointer"}}
            aria-controls="collapseExampleTwo"
          ></i>
        </div>
        <div className="collapse" id="collapseExampleTwo">
          <div className="card card-body">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </div>
      <div className="col-md-12 pb-4">
        <div className="border-bottom d-flex justify-content-between align-items-center">
          <span className="fw-bold">Are there any refunds?</span>
          <i
            className="fas fa-chevron-down"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExampleThree"
            aria-expanded="false"
            style={{cursor: "pointer"}}
            aria-controls="collapseExampleThree"
          ></i>
        </div>
        <div className="collapse" id="collapseExampleThree">
          <div className="card card-body">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </div>
      <div className="col-md-12 mb-5">
        <div className="border-bottom d-flex justify-content-between align-items-center">
          <span className="fw-bold">Why should I trust with ATrader?</span>
          <i
            className="fas fa-chevron-down"
            data-bs-toggle="collapse"
            data-bs-target="#collapseExampleFour"
            aria-expanded="false"
            style={{cursor: "pointer"}}
            aria-controls="collapseExampleFour"
          ></i>
        </div>
        <div className="collapse" id="collapseExampleFour">
          <div className="card card-body">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
        </div>
      </div>
    </>
  );
};

export default Questions;
