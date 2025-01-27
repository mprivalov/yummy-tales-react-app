import React from "react";
import { marijaImage3 } from "../assets/assets.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTelegram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "./About.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="article">
        <h3>hello, my name is Marija</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          nulla quam obcaecati animi vitae laboriosam harum, nemo odio deleniti
          neque magni officiis nam temporibus natus, adipisci labore incidunt
          quae aspernatur. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Doloremque nulla quam obcaecati animi vitae laboriosam harum,
          nemo odio deleniti neque magni officiis nam temporibus natus, adipisci
          labore incidunt quae aspernatur.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Doloremque nulla quam obcaecati animi vitae
          laboriosam harum, nemo odio deleniti neque magni officiis nam
          temporibus natus, adipisci labore incidunt quae aspernatur.
        </p>
        <div className="social-media-sec">
          <a>
            <FontAwesomeIcon className="icon-sec" icon={faInstagram} />
          </a>
          <a>
            <FontAwesomeIcon className="icon-sec" icon={faTelegram} />
          </a>
          <a>
            <FontAwesomeIcon className="icon-sec" icon={faLinkedin} />
          </a>
        </div>
      </div>
      <div className="photo">
        <img src={marijaImage3} alt="marija-image" />
      </div>
    </div>
  );
};

export default About;
