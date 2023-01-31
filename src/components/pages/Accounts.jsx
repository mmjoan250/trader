import React from "react";
import { Link } from "react-router-dom";
import {
  account_one,
  account_two,
  account_three,
  account_four,
} from "../../images";
import { Account, Navbar } from "../common";

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
        <div className="d-flex justify-content-between col-md-12">
          <Account
            image={account_one}
            title="Easy Trader Account"
            price="5.2"
            period="12 Months Free"
          />
          <Account
            image={account_two}
            title="Frequent Trader Account"
            price="7.5"
            period="1 Month Free"
          />
          <Account
            image={account_three}
            title="Professional Trader Account"
            price="9.60"
            period="3 Months Free"
          />
          <Account
            image={account_four}
            title="Premium Investor Account"
            price="10.66"
            period="Contact us"
          />
        </div>
        <Link className="py-5" to="/compare">
          <u>Compare accounts features</u>
        </Link>
      </div>
    </div>
  );
};

export default Accounts;
