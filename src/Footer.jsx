import React from "react";
import "./Footer.css";
import logo from "./images/logo.png";
import f from "./images/f.svg";
import f2 from "./images/f2.svg";
import f3 from "./images/f3.svg";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="container1">
      <div className="foot-cpy">
        <a href="/">
          <img className="footer-img" src={logo} alt="logo" />
        </a>
        <p className="foot-p">© 2024. 56 AI Technologies Pvt Limited.</p>
        <p className="foot-p2">All Rights Reserved</p>
        <div className="foot-logo-div">
          <img src={f2} alt="logo" className="foot-logo" />
          <img src={f3} alt="logo" className="foot-logo" />
          <img src={f} alt="logo" className="foot-logo" />
        </div>
      </div>

      <div className="foot-descrip">
        <h5>Subscriptions</h5>
        <ul className="foot-ul">
          <li className="foot-li">
            <a href="/home" className="foot-a">
              Home
            </a>
          </li>
          <li className="foot-li">
            <a href="/personal" className="foot-a">
              Personal
            </a>
          </li>
        </ul>
      </div>

      <div className="foot-descrip">
        <h5>Company</h5>
        <ul className="foot-ul">
          <li className="foot-li">
            <a href="/about" className="foot-a">
              About us
            </a>
          </li>
          <li className="foot-li">
            <a href="/contact" className="foot-a">
              Contact us
            </a>
          </li>
        </ul>
      </div>

      <div className="foot-descrip">
        <h5>Resources</h5>
        <ul className="foot-ul">
          <li className="foot-li">
            <a href="/" className="foot-a">
              Privacy
            </a>
          </li>
        </ul>
      </div>

      <div className="foot-icons">
        <i>
          {" "}
          <a href="https://x.com/?lang=en-in">
            <FaTwitter />
          </a>
        </i>
        <i>
          <a href="https://www.instagram.com/?hl=en">
            <FaInstagram />
          </a>
        </i>
        <i>
          <a href="https://www.linkedin.com/home?originalSubdomain=in">
            <FaLinkedin />
          </a>
        </i>
        <i>
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
        </i>
        <i>
          <a href="https://www.youtube.com/">
            <FaYoutube />
          </a>
        </i>
      </div>
    </div>
  );
}

export default Footer;
