import React, { useState, useTransition } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false); // состояние для управления hamburger menu

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="navbar">
      <div className="logo-container">
        <a href="/">
          <img src="/YT-LogoHD.png" className="logo-img" />
        </a>
      </div>

      <ul className="navbar-menu">
        <a
          href="#header"
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
          <Link to="/bag">
            <FontAwesomeIcon className="bag-icon" icon={faBagShopping} />
          </Link>
          <span className="dot"></span>
        </div>
        {/* <button className="signin">sign up</button> */}
        <button className="signin" onClick={() => setShowLogin(true)}>
          login
        </button>
        <div className="hamburger" onClick={toggleMenu}>
          <FontAwesomeIcon
            className={`bars ${isOpen ? "hidden" : ""}`}
            icon={faBars}
          />
          <FontAwesomeIcon
            className={`xMark ${isOpen ? "" : "hidden"}`}
            icon={faXmark}
          />
        </div>
      </div>
      <ul className={`mobile-navbar-menu ${isOpen ? "open" : ""}`}>
        <a
          href="#header"
          onClick={() => {
            setMenu("home");
            setIsOpen(false);
          }}
          className={menu === "home" ? "active" : ""}
        >
          home
        </a>
        <a
          href="#about"
          onClick={() => {
            setMenu("about");
            setIsOpen(false);
          }}
          className={menu === "about" ? "active" : ""}
        >
          about
        </a>
        <a
          href="#recipes"
          onClick={() => {
            setMenu("recipes");
            setIsOpen(false);
          }}
          className={menu === "recipes" ? "active" : ""}
        >
          recipes
        </a>
        <a
          href="#contact"
          onClick={() => {
            setMenu("contact");
            setIsOpen(false);
          }}
          className={menu === "contact" ? "active" : ""}
        >
          contact
        </a>
      </ul>
    </div>
  );
};

export default Navbar;
