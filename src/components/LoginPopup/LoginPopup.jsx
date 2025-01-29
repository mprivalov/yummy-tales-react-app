import React, { useState } from "react";
import "./LoginPopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <FontAwesomeIcon
            onClick={() => setShowLogin(false)}
            icon={faXmark}
            className="close-button"
          />
        </div>
        <div className="login-popup-input">
          {currState === "Login" ? null : (
            <input type="text" placeholder="Name" required />
          )}
          <input type="email" placeholder="E-mail" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button type="button">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I accept all terms & conditions </p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Sign-up here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
