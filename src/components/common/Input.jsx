import React from "react";

const Input = ({ label, type, placeholder }) => {
  return (
    <div className="form-group mt-2">
      <label for="exampleInputEmail1" className="mb-2">{label}</label>
      <input type={type} className="form-control" placeholder={placeholder} />
    </div>
  );
};

export default Input;
