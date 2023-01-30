import React from "react";

const Account = ({ image, price, period, title }) => {
  return (
    <div className="shadow rounded account-width">
      <img alt="account" className="image-fluid account-image" src={image} />
      <div className="fw-bold text-center py-4 ">
        <span className="text-wrap col-md-8">{title}</span>
      </div>
      <div className="dollar fw-bold text-center">
        <span>{price}% ROI</span>
      </div>
      <div className="text-center py-4">
        {period === "Contact us" ? (
          <span className="text-primary">{period}</span>
        ) : (
          period
        )}
      </div>
    </div>
  );
};

export default Account;
