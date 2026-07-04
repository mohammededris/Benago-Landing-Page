import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-about">
          <h3>Benago</h3>
          <p>
            Your gateway to unlocking potential through education. Join
            thousands of students on their journey to success.
          </p>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            <Mail /> benago2627@gmail.com
          </p>
        </div>
        <div className="footer-social">
          <h3>Social</h3>
          <Link
            to="https://www.linkedin.com/in/benago-courses-57b17b419/"
            target="_blank"
          >
            {" "}
            <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
          </Link>
          <Link
            to="https://www.facebook.com/profile.php?id=61591330822740"
            target="_blank"
          >
            {" "}
            <FontAwesomeIcon icon={faFacebook} /> Facebook
          </Link>
          <Link to="https://www.instagram.com/benago_10/" target="_blank">
            {" "}
            <FontAwesomeIcon icon={faInstagram} /> Instagram
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Benago. All rights reserved. | Built with
          ❤️ for the next generation.
          <br />
          Developed by Mohammed Edris
          <Link
            style={{ color: "white", textDecoration: "none" }}
            to="https://github.com/mohammededris/Benago-Landing-Page"
            target="_blank"
          >
            {" "}
            <FontAwesomeIcon icon={faGithub} />
            GitHub
          </Link>
        </p>
      </div>
    </footer>
  );
}
