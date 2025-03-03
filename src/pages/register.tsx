// import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const register = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="right">
          <h2>Create Account</h2>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input type="password" placeholder="Create a password" />
          <button className="btn">Sign Up</button>
          <p>
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </div>
        <div className="left">
          <h2>Welcome Back!</h2>
          <p>Stay connected with us and log in to your account.</p>
          <Link to="/login" className="btn secondary">Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default register;
