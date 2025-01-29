import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faLinkedin,
  faFacebook,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const Footer = () => {
  return (
    <div className="footer" id="contact">
      <div className="footer-up">
        <div className="footer-logo-container">
          <a href="/">
            <img src="/YT-LogoHD.png" className="footer-logo-img" height="32" />
          </a>
        </div>
        <div className="links-columns">
          <div className="column">
            <h4>About</h4>
            <ul className="list-footer">
              <li>
                <a>Company</a>
              </li>
              <li>
                <a>Marija Romanova</a>
              </li>
              <li>
                <a>Team</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4>Customer Service</h4>
            <ul className="list-footer">
              <li>
                <a>Help</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Orders</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h4>Contact Us</h4>
            <ul className="list-footer">
              <li>
                <a>
                  <FontAwesomeIcon className="icon" icon={faLocationDot} />
                  Jurmala, LV-2016, LV
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon className="icon" icon={faEnvelope} />
                  info@yummytales.com
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon className="icon" icon={faPhone} />
                  +371 29999999
                </a>
              </li>
              <li>
                <a>
                  <FontAwesomeIcon className="icon" icon={faPhone} />
                  +371 20000000
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="break" />
      <div className="footer-down">
        <div className="copyright">
          <p>© 2024 Yummy Tales. All rights reserved. Powered by MP69</p>
        </div>
        <div className="social-media">
          <a href="">
            <FontAwesomeIcon className="icon" icon={faYoutube} />
          </a>
          <a href="">
            <FontAwesomeIcon className="icon" icon={faFacebook} />
          </a>
          <a href="">
            <FontAwesomeIcon className="icon" icon={faInstagram} />
          </a>
          <a href="">
            <FontAwesomeIcon className="icon" icon={faTelegram} />
          </a>
          <a href="">
            <FontAwesomeIcon className="icon" icon={faLinkedin} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
