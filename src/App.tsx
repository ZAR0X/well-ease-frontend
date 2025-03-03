// import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <h1 className="logo">WELL.EASE</h1>
      <p className="tagline">Get healthy with us</p>

      <div className="login-box">
        <label>Email</label>
        <input type="email" placeholder="Value" />

        <label>Password</label>
        <input type="password" placeholder="Value" />

        <button className="sign-in">Log In</button>
        <a href="#" className="forgot-password">Forgot password?</a>
      </div>

      <button className="create-account">Create new account</button>
    </div>
  );
}

export default App;
