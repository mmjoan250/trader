import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../images";

const Login = () => {
  return (
    <div className="login-container d-flex justify-content-center align-items-center flex-column">
      <div>
        <img alt="logo" src={logo} height="50" />
      </div>
      <div className="col-md-3 mt-5">
        <div>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="col-md-12">
            <Link
              type="submit"
              className="btn btn-primary btn-block col-md-12"
              to="/accounts"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
