import React, { useState } from "react";
import { Navbar } from "../common";

const HRCareer = () => {
  const [roles, setRoles] = useState([{ role: "" }]);
  const [skills, setSkills] = useState([{ skill: "" }]);
  const [attributes, setAttributes] = useState([{ attribute: "" }]);
  const [offers, setOffers] = useState([{ offer: "" }]);

  const addRoles = () => {
    setRoles([...roles, { role: "" }]);
  };
  const addSkills = () => {
    setSkills([...skills, { skill: "" }]);
  };
  const addAttributes = () => {
    setAttributes([...attributes, { attribute: "" }]);
  };
  const addOffers = () => {
    setOffers([...offers, { offer: "" }]);
  };
  const removeRoles = (i) => {
    let newRoleValues = [...roles];
    newRoleValues.splice(i, 1);
    setRoles(newRoleValues);
  };
  const removeSkills = (i) => {
    let newSkillValues = [...skills];
    newSkillValues.splice(i, 1);
    setSkills(newSkillValues);
  };
  const removeAttributes = (i) => {
    let newAttributes = [...attributes];
    newAttributes.splice(i, 1);
    setAttributes(newAttributes);
  };
  const removeOffers = (i) => {
    let newOfferValues = [...offers];
    newOfferValues.splice(i, 1);
    setOffers(newOfferValues);
  };

  const handleRoleChange = (i, e) => {
    let newRoleValues = [...roles];
    newRoleValues[i][e.target.name] = e.target.value;
    setRoles(newRoleValues);
  };
  const handleSkillChange = (i, e) => {
    let newSkillValues = [...skills];
    newSkillValues[i][e.target.name] = e.target.value;
    setRoles(newSkillValues);
  };
  const handleAttributeChange = (i, e) => {
    let newAttributes = [...attributes];
    newAttributes[i][e.target.name] = e.target.value;
    setRoles(newAttributes);
  };
  const handleOfferChange = (i, e) => {
    let newOfferValues = [...offers];
    newOfferValues[i][e.target.name] = e.target.value;
    setRoles(newOfferValues);
  };

  const dispalyRoles = roles.map((element, index) => {
    return (
      <div className="mb-3 d-flex flex-row ">
        <input
          type="text"
          className="form-control me-2"
          name="role"
          value={element.role || ""}
          id="exampleInputPassword1"
          onChange={(e) => handleRoleChange(index, e)}
        />
        {index !== 0 && (
          <div
            className=""
            onClick={() => removeRoles(index)}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-times text-danger"></i>
          </div>
        )}
      </div>
    );
  });

  const dispalySkills = skills.map((element, index) => {
    return (
      <div className="mb-3 d-flex flex-row ">
        <input
          type="text"
          className="form-control me-2"
          name="skill"
          value={element.skill || ""}
          id="exampleInputPassword1"
          onChange={(e) => handleSkillChange(index, e)}
        />
        {index !== 0 && (
          <div
            className=""
            onClick={() => removeSkills(index)}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-times text-danger"></i>
          </div>
        )}
      </div>
    );
  });
  const dispalyAttributes = attributes.map((element, index) => {
    return (
      <div className="mb-3 d-flex flex-row ">
        <input
          type="text"
          className="form-control me-2"
          name="attribute"
          value={element.attribute || ""}
          id="exampleInputPassword1"
          onChange={(e) => handleAttributeChange(index, e)}
        />
        {index !== 0 && (
          <div
            className=""
            onClick={() => removeAttributes(index)}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-times text-danger"></i>
          </div>
        )}
      </div>
    );
  });
  const dispalyOffers = offers.map((element, index) => {
    return (
      <div className="mb-3 d-flex flex-row ">
        <input
          type="text"
          className="form-control me-2"
          name="offer"
          value={element.offer || ""}
          id="exampleInputPassword1"
          onChange={(e) => handleOfferChange(index, e)}
        />
        {index !== 0 && (
          <div
            className=""
            onClick={() => removeOffers(index)}
            style={{ cursor: "pointer" }}
          >
            <i className="fas fa-times text-danger"></i>
          </div>
        )}
      </div>
    );
  });

  return (
    <div>
      <Navbar careers_active={true} border="border-bottom" />
      <div className="container d-flex justify-content-center flex-column align-items-center">
        <div className="fw-bold fs-2 py-5 display-4 dollar">Post a Job</div>
        <div className="py-3 col-md-6 d-flex justify-content-center flex-column">
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label fw-bold">
              Job Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>

          <div className="d-flex justify-content-between">
            <label for="exampleInputPassword1" className="form-label fw-bold">
              Key Roles and Responsibilities
            </label>
            <div className="d-flex flex-row">
              <button
                className="btn btn-info btn-sm mb-2 rounded"
                onClick={() => addRoles()}
              >
                <i className="fas fa-plus mx-2"></i>Add Field
              </button>
            </div>
          </div>
          {dispalyRoles}
          <div className="d-flex justify-content-between">
            <label for="exampleInputPassword1" className="form-label fw-bold">
              Skills, Qualifications and Experience
            </label>
            <div className="d-flex flex-row">
              <button
                className="btn btn-info btn-sm mb-2 rounded"
                onClick={() => addSkills()}
              >
                <i className="fas fa-plus mx-2"></i>Add Field
              </button>
            </div>
          </div>
          {dispalySkills}
          <div className="d-flex justify-content-between">
            <label for="exampleInputPassword1" className="form-label fw-bold">
              Personal attributes
            </label>
            <div className="d-flex flex-row">
              <button
                className="btn btn-info btn-sm mb-2 rounded"
                onClick={() => addAttributes()}
              >
                <i className="fas fa-plus mx-2"></i>Add Field
              </button>
            </div>
          </div>
          {dispalyAttributes}
          <div className="d-flex justify-content-between">
            <label for="exampleInputPassword1" className="form-label fw-bold">
              What we offer
            </label>
            <div className="d-flex flex-row">
              <button
                className="btn btn-info btn-sm mb-2 rounded"
                onClick={() => addOffers()}
              >
                <i className="fas fa-plus mx-2"></i>Add Field
              </button>
            </div>
          </div>
          {dispalyOffers}

          <button type="submit" className="btn btn-common text-white fw-bold mb-5">
            POST
          </button>
        </div>
      </div>
    </div>
  );
};

export default HRCareer;
