import React, { useState } from "react";
import logo from "./images/logo.png";
import "./Header.css";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="container">
      <div className="logo-div">
        <img onClick={() => navigate("/")} src={logo} alt="logo" />
      </div>
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div style={{ transform: menuOpen ? "rotate(45deg)" : "rotate(0)" }} />
        <div style={{ opacity: menuOpen ? "0" : "1" }} />
        <div style={{ transform: menuOpen ? "rotate(-45deg)" : "rotate(0)" }} />
      </div>
      <div className={`list-style ${menuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="./about">About us</a>
          </li>
          <li>
            <a href="/">
              Products
              <i>
                <IoIosArrowDown />
              </i>
            </a>
            <div className="dropdown_menu">
              <ul className="parts">
                <li onClick={() => navigate("/cctv")}>
                  CCTV Cameras & Surveillance Systems
                </li>
                <li onClick={() => navigate("/security")}>
                  Home Security Systems
                </li>
              </ul>
            </div>
          </li>
          <li>
            <a href="./personal">Personal</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <button onClick={() => navigate("/contact")} className="head-btn">
          Talk to an expert
        </button>
      </div>
    </div>
  );
}

export default Header;
