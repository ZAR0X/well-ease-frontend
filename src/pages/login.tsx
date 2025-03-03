// import React from "react";
import { Link } from "react-router-dom";
import "./auth.css";

const login = () => {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="left">
          <h2>Sign in</h2>
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
          <button className="btn">Sign In</button>
          <p>
            Don't have an account? <Link to="/register">Sign Up</Link>
          </p>
        </div>
        <div className="right">
          <h2>Hello, Friend!</h2>
          <p>Join our community and start your journey with us.</p>
          <Link to="/register" className="btn secondary">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default login;
