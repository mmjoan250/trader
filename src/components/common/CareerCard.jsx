import React from "react";
import { Link } from "react-router-dom";

const CareerCard = () => {
  return (
    <Link
      className="d-flex justify-content-between py-3 shadow px-2 rounded text-black"
      to="/career"
    >
      <div className="">
        Frontend Software Developer: Deadline 28 February 2023
      </div>
      <div style={{ cursor: "pointer" }}>
        <i class="fa-solid fa-chevron-right fw-bold text-primary"></i>
      </div>
    </Link>
  );
};

export default CareerCard;
