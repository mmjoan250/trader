import React from "react";
import { Input } from "../common";

const RegisterModal = (id, btn) => {
  return (
    <>
      <button
        className="btn btn-common  text-white me-3"
        data-bs-toggle="modal"
        data-bs-target="#registerNow"
      >
        REGISTER NOW
      </button>
      <div
        className="modal fade"
        id="registerNow"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Register
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <Input
                  type="text"
                  label="First Name"
                  placeholder="First name"
                />
                <Input type="text" label="Last Name" placeholder="Last name" />
                <Input type="email" label="Email" placeholder="Email" />
                <Input
                  type="password"
                  label="Password"
                  placeholder="Password"
                />
                <Input
                  type="password"
                  label="Confirm Password"
                  placeholder="Confirm password"
                />

                <button type="submit" className="btn btn-primary mt-2">
                  Submit
                </button>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterModal;
