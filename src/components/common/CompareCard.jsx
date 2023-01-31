import classNames from "classnames";
import React from "react";

const CompareCard = ({ btn_text, title, content, btn_color, learn }) => {
  return (
    <div className="d-flex justify-content-center align-items-center flex-column bg-white me-1 p-3 compare-card">
      <div className="text-black fw-bold mb-2">{title}</div>
      <div className="text-center">{content}</div>
      <div className="py-3">
        <button className={classNames("btn", btn_color)}>{btn_text}</button>
      </div>
      <div style={{ cursor: "pointer" }}>
        <u>{learn}</u>
      </div>
    </div>
  );
};

export default CompareCard;
