import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header" id="header">
      <div className="header-content">
        <h4>chef marija recipes</h4>
        <h1>yummy tales</h1>
        <a className='view-recipes-btn' href="#recipes">view recipes</a>
      </div>
    </div>
  );
};

export default Header;
