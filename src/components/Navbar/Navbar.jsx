import React, { useState, useTransition } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <div className="logo-container">
        <a href="/">
          <img src="/logoYT.png" className="logo-img" />
        </a>
      </div>

      <ul className="navbar-menu">
        <a
          href="/"
          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </a>
        <a
          href="#about"
          onClick={() => setMenu("about")}
          className={menu === "about" ? "active" : ""}
        >
          about
        </a>
        <a
          href="#recipes"
          onClick={() => setMenu("recipes")}
          className={menu === "recipes" ? "active" : ""}
        >
          recipes
        </a>
        <a
          href="#contact"
          onClick={() => setMenu("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          contact
        </a>
      </ul>

      <div className="navbar-end">
        <div className="bag-shopping">
          <Link to='/bag'><FontAwesomeIcon className="bag-icon" icon={faBagShopping} /></Link>
          <span className="dot"></span>
        </div>
        {/* <button className="signin">sign up</button> */}
        <button className="signin" onClick={() => setShowLogin(true)}>
          login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
