import React from "react";
import { Link } from "react-router-dom";

const CareerCard = () => {
  return (
    <div className="d-flex justify-content-between py-3 shadow px-2 rounded">
      <div className="">
        Frontend Software Developer: Deadline 28 February 2023
      </div>
      <Link style={{ cursor: "pointer" }} to="/career">
        <i class="fa-solid fa-chevron-right fw-bold text-primary"></i>
      </Link>
    </div>
  );
};

export default CareerCard;
