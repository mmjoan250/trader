import React from "react";

const Pricing = () => {
  const pricing1 = [
    { text: "Annual subscription" },
    { text: "Free" },
    { text: "Free" },
    {
      text: (
        <span className="text-primary" style={{ cursor: "pointer" }}>
          Contact us
        </span>
      ),
    },
    {
      text: (
        <span className="text-primary" style={{ cursor: "pointer" }}>
          Contact us
        </span>
      ),
    },
  ];

  const pricing2 = [
    { text: "Platform fee" },
    { text: "TZS. 0" },
    { text: "TZS. 2,500" },
    { text: "TZS. 30,000" },
    {
      text: (
        <span className="text-primary" style={{ cursor: "pointer" }}>
          Contact us
        </span>
      ),
    },
  ];
  const pricing3 = [
    { text: "Payment cover fee" },
    { text: "" },
    { text: <i className="fa-solid fa-circle-check text-success"></i> },
    { text: <i className="fa-solid fa-circle-check text-success"></i> },
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
  return (
    <>
      <div className="d-flex justify-content-between">{displayPricing1}</div>
      <div className="d-flex justify-content-between">{displayPricing2}</div>
      <div className="d-flex justify-content-between">{displayPricing3}</div>
    </>
  );
};

export default Pricing;
