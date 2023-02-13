import React from "react";

const CareerCard = () => {
  return (
    <div className="d-flex justify-content-between py-3 shadow px-2 rounded">
      <div className="">
        Frontend Software Developer: Deadline 28 February 2023
      </div>
      <div style={{ cursor: "pointer" }}>
        <i class="fa-solid fa-chevron-right fw-bold text-primary"></i>
      </div>
    </div>
  );
};

export default CareerCard;
