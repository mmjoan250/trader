import React from "react";
import CompareCard from "./CompareCard";

const Support = () => {
  const pricing1 = [
    { text: "Email support" },
    { text: <i className="fa-solid fa-circle-check text-success"></i> },
    { text: <i className="fa-solid fa-circle-check text-success"></i> },
    { text: <i className="fa-solid fa-circle-check text-success"></i> },
    { text: <i className="fa-solid fa-circle-check text-success"></i> },
  ];

  const pricing2 = [
    { text: "Trading support" },
    { text: "" },
    { text: <i className="fa-solid fa-circle-check text-success"></i> },
    { text: <i className="fa-solid fa-circle-check text-success"></i> },
    { text: <i className="fa-solid fa-circle-check text-success"></i> },
  ];
  const pricing3 = [
    { text: "1st camping migration" },
    { text: "" },
    { text: <i className="fa-solid fa-circle-check text-success"></i> },
    { text: <i className="fa-solid fa-circle-check text-success"></i> },
    { text: <i className="fa-solid fa-circle-check text-success"></i> },
  ];
  const pricing4 = [
    { text: "Dedicated onboarding" },
    { text: "" },
    { text: "" },
    { text: <i className="fa-solid fa-circle-check text-success"></i> },
    { text: <i className="fa-solid fa-circle-check text-success"></i> },
  ];
  const pricing5 = [
    { text: "Dedicated success rep" },
    { text: "" },
    { text: "" },
    { text: "" },
    { text: <i className="fa-solid fa-circle-check text-success"></i> },
  ];
  const pricing6 = [
    { text: "Annual trading review" },
    { text: "" },
    { text: "" },
    { text: "" },
    { text: <i className="fa-solid fa-circle-check text-success"></i> },
  ];

  const displayPricing1 = pricing1.map((item, index) => {
    return (
      <div
        key={index}
        className="d-flex justify-content-center align-items-center flex-column bg-white me-1 p-3 compare-card"
      >
        {item.text}
      </div>
    );
  });
  const displayPricing2 = pricing2.map((item, index) => {
    return (
      <div
        key={index}
        className="my-1 d-flex justify-content-center align-items-center flex-column bg-white me-1 p-3 compare-card"
      >
        {item.text}
      </div>
    );
  });
  const displayPricing3 = pricing3.map((item, index) => {
    return (
      <div
        key={index}
        className="d-flex justify-content-center align-items-center flex-column bg-white me-1 p-3 compare-card"
      >
        {item.text}
      </div>
    );
  });
  const displayPricing4 = pricing4.map((item, index) => {
    return (
      <div
        key={index}
        className="d-flex justify-content-center align-items-center flex-column bg-white me-1 p-3 compare-card"
      >
        {item.text}
      </div>
    );
  });
  const displayPricing5 = pricing5.map((item, index) => {
    return (
      <div
        key={index}
        className="d-flex justify-content-center align-items-center flex-column bg-white me-1 p-3 compare-card"
      >
        {item.text}
      </div>
    );
  });
  const displayPricing6 = pricing6.map((item, index) => {
    return (
      <div
        key={index}
        className="d-flex justify-content-center align-items-center flex-column bg-white me-1 p-3 compare-card"
      >
        {item.text}
      </div>
    );
  });
  return (
    <>
      <div className="d-flex justify-content-between">{displayPricing1}</div>
      <div className="d-flex justify-content-between">{displayPricing2}</div>
      <div className="d-flex justify-content-between">{displayPricing3}</div>
      <div className="my-1 d-flex justify-content-between">
        {displayPricing4}
      </div>
      <div className="my-1 d-flex justify-content-between">
        {displayPricing5}
      </div>
      <div className="mb-1 d-flex justify-content-between">
        {displayPricing6}
      </div>
      <div className="d-flex justify-content-between">
        <CompareCard />
        <CompareCard
          btn_text="GET STARTED"
          learn="Explore Easy Trader"
          btn_color="btn-common text-white"
        />
        <CompareCard
          btn_text="GET STARTED"
          learn="Explore Easy Trader"
          btn_color="btn-common text-white"
        />
        <CompareCard
          btn_text="GET STARTED"
          learn="Explore Easy Trader"
          btn_color="btn-common text-white"
        />
        <CompareCard
          btn_text="GET STARTED"
          learn="Explore Easy Trader"
          btn_color="btn-common text-white"
        />
      </div>
    </>
  );
};

export default Support;
