import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer-info">
        <p>Copyright © 2024 Yummy Tales. All rights reserved.</p>
        <p>Powered by MP69</p>
      </div>
      <div className="social-media">
        <FontAwesomeIcon className="icon" icon={faInstagram} />
        <FontAwesomeIcon className="icon" icon={faTelegram} />
        <FontAwesomeIcon className="icon" icon={faLinkedin} />
      </div>
    </div>
  );
};

export default Footer;
