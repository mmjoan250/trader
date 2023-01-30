import React from "react";
import { Navbar } from "../common";

const Accounts = () => {
  return (
    <div>
      <Navbar accounts_active={true} border="border-bottom" />
      <div className="container px-5 d-flex justify-content-center flex-column align-items-center">
        <div className="fs-1 my-5 display-4 col-md-7 text-center">
          Our Solutions to help you achieve your financial prosperity
        </div>
        <div className="mb-5">
          Buy and sell shares on the Dar Es Salaam Stock Exchange (DSE) or get
          knowledge on investment.
        </div>
        <div className="d-flex justify-content-between">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <u>Compare accounts features</u>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
