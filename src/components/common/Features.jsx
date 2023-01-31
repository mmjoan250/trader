import React from "react";
import CompareCard from "./CompareCard";

const Features = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <CompareCard />
        <CompareCard
          content={
            <div>
              <div>Annual subscription</div>
              <div className="my-1">Platform fee</div>
              <div>Payment cover fee</div>
            </div>
          }
        />
        <CompareCard
          content={
            <div>
              <div>Annual subscription</div>
              <div className="my-1">Platform fee</div>
              <div className="mb-1">Payment cover fee</div>
              <div>Trading account</div>
            </div>
          }
        />
        <CompareCard
          content={
            <div>
              <div>Annual subscription</div>
              <div className="my-1">Platform fee</div>
              <div className="mb-1">Payment cover fee</div>
              <div className="mb-1">Trading account</div>
              <div className="mb-1">Cool features here</div>
              <div>Another one over here again</div>
            </div>
          }
        />
        <CompareCard
          content={
            <div>
              <div>Annual subscription</div>
              <div className="my-1">Platform fee</div>
              <div className="mb-1">Payment cover fee</div>
              <div className="mb-1">Trading account</div>
              <div className="mb-1">Cool features here</div>
              <div>Another one over here again</div>
            </div>
          }
        />
      </div>
    </>
  );
};

export default Features;
