import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
import { baseUrl } from "../../axios/AxiosClinet";
import { error } from "jquery";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "user", // Default to 'user'
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { id, value, type } = e.target;
    // Check if the event target is a radio button
    if (type === "radio") {
      // If it's a radio button, set the value directly to userType
      setFormData({ ...formData, userType: value });
    } else {
      // If it's not a radio button, update the state based on the input id
      setFormData({ ...formData, [id]: value });
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Construct object to send in API request
    const userData = {
      displayName: formData.name,
      email: formData.email,
      password: formData.password,
      confirmPassword: formData.confirmPassword,
      userRole:
        formData.userType === "user"
          ? 0
          : formData.userType === "business"
          ? 1
          : 2,
    };
    // Send userData in API request
    console.log(userData); // Replace with API call
    axios
      .post(`${baseUrl}/api/Account/Register`, userData)
      .then((res) => {
        console.log("Register Success", res);
        navigate("/login");
      })
      .catch((error) => {
        console.log("Register failed", error);
      });
  };

  return (
    <div>
      <section id="page1">
        <div className="Coll">
          <div className="co co1"></div>
          <div className="co co2"></div>

          <div className="co co3">
            <p className="int">Create Your Account,</p>
          </div>

          <div className="co co4">
            <div className="form">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                  required
                  className="form-control mb-3"
                  placeholder="Enter your Name"
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                  required
                  className="form-control mb-3"
                  placeholder="Enter your Email"
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="password">Password:</label>
                <input
                  required
                  className="form-control mb-3"
                  placeholder=" Password"
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                />
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                  required
                  className="form-control mb-3"
                  placeholder=" Confirm Password"
                  type="password"
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
                <center>
                  <div className="register-control">
                    <label className="register-radio">
                      <input
                        className="redo"
                        type="radio"
                        name="userType"
                        value="user"
                        checked={formData.userType === "user"}
                        onChange={handleChange}
                      />
                      User
                    </label>
                    <label className="register-radio">
                      <input
                        className="redo"
                        type="radio"
                        name="userType"
                        value="business"
                        checked={formData.userType === "business"}
                        onChange={handleChange}
                      />
                      Business owner
                    </label>
                    <label className="register-radio">
                      <input
                        className="redo"
                        type="radio"
                        name="userType"
                        value="serviceProvider"
                        checked={formData.userType === "serviceProvider"}
                        onChange={handleChange}
                      />
                      Service provider
                    </label>
                  </div>
                </center>
                <button className="btn btn-lg my-5" type="submit">
                  Sign Up
                </button>
                         
              </form>
            </div>

            <center>
              <span>Already have account?</span>{" "}
              <Link className="nav-link " to="/login">
                Log in{" "}
              </Link>
            </center>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;
