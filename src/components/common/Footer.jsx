import React from "react";
import { footer_logo } from "../../images";

const Footer = () => {
  return (
    <div>
      {" "}
      <div className="d-flex justify-content-between">
        <div>
          <div className="my-3">
            <img alt="logo" src={footer_logo} height="50" />
          </div>
          <div>support@atrader.co.tz</div>
          <div className="text-muted my-2">255.4567.89</div>
        </div>
        <div>
          <div className="fw-bold text-uppercase my-3">QUICK LINKS</div>
          <div className="text-muted mb-1" style={{ cursor: "pointer" }}>
            How it works
          </div>
          <div className="text-muted mb-1" style={{ cursor: "pointer" }}>
            Security
          </div>
          <div className="text-muted mb-1" style={{ cursor: "pointer" }}>
            Accounts
          </div>
          <div className="text-muted mb-1" style={{ cursor: "pointer" }}>
            Pricing
          </div>
          <div className="text-muted mb-1" style={{ cursor: "pointer" }}>
            Guarantee
          </div>
        </div>
        <div>
          <div className="fw-bold text-uppercase my-3">ABOUT US</div>
          <div className="text-muted mb-1" style={{ cursor: "pointer" }}>
            How it works
          </div>
          <div className="text-muted mb-1" style={{ cursor: "pointer" }}>
            Security
          </div>
          <div className="text-muted mb-1" style={{ cursor: "pointer" }}>
            Accounts
          </div>
          <div className="text-muted mb-1" style={{ cursor: "pointer" }}>
            Pricing
          </div>
          <div className="text-muted mb-1" style={{ cursor: "pointer" }}>
            Guarantee
          </div>
        </div>
        <div>
          <div className="fw-bold text-uppercase my-3">BECOME A MEMBER</div>
          <div className="text-muted mb-1" style={{ cursor: "pointer" }}>
            How it works
          </div>
          <div className="text-muted mb-1" style={{ cursor: "pointer" }}>
            Security
          </div>
          <div className="text-muted mb-1" style={{ cursor: "pointer" }}>
            Accounts
          </div>
          <div className="text-muted mb-1" style={{ cursor: "pointer" }}>
            Pricing
          </div>
          <div className="text-muted mb-1" style={{ cursor: "pointer" }}>
            Guarantee
          </div>
        </div>
      </div>
      <div className="text-muted my-5" style={{ fontSize: "12px" }}>
        &copy; 2023{" "}
        <span className="text-danger">
          A-Trader Brokage & Securitiew Limited
        </span>{" "}
        All rights reserved
      </div>
    </div>
  );
};

export default Footer;
