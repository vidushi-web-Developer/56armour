import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Security.css";
import { IoIosArrowForward } from "react-icons/io";
import camera from "./images/camera1.webp";
import cam1 from "./images/cam1.webp";
import logo1 from "./images/clogo1.svg";
import logo2 from "./images/clogo2.svg";
import logo3 from "./images/clogo3.svg";
import logo4 from "./images/clogo4.svg";
import logo5 from "./images/clogo5.svg";
import logo6 from "./images/clogo6.svg";
import camera2 from "./images/HomSec.jpg";
import cpa from "./images/cap1.webp";
import cpa2 from "./images/cap2.webp";
import cpa3 from "./images/cap3.webp";
import cpa4 from "./images/cap4.webp";
import cpa5 from "./images/cap5.webp";
import package1 from "./images/package.svg";
import cama from "./images/cr.jpeg";
import { useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

function Security() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const revealPoint = 80; // Adjust for when you want the reveal to happen

        if (
          elementTop < windowHeight - revealPoint &&
          !reveal.classList.contains("active")
        ) {
          reveal.classList.add("active");
        }
      });
    }
     

 // Attach the scroll event listener
 window.addEventListener("scroll", handleScroll);
 handleScroll();

 // Clean up the event listener on component unmount
 return () => {
   window.removeEventListener("scroll", handleScroll);
 };
}, []);


  const faqData = [
    {
      question: "What is the installation process of the camera?",
      answer:
        "The installation process involves mounting the camera, connecting to power, and following the setup guide in the app.",
    },
    {
      question: "Can I use 56 AI Cam One outdoors?",
      answer:
        "Yes, 56 AI Cam One is suitable for outdoor use with proper installation.",
    },
    {
      question: "Does 56 AI Cam One support night vision?",
      answer:
        "Yes, it has night vision capabilities for low-light environments.",
    },
    {
      question: "Is the 56 AI Cam One weather-resistant?",
      answer:
        "Yes, it is weather-resistant and can withstand various outdoor conditions.",
    },
    {
      question: "Can I control the camera using my smartphone?",
      answer: "Yes, the camera can be controlled through the smartphone app.",
    },
  ];

  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <Header />
      <div className="security">
        <div className="security-class1">
          <h3>Home Seurity System</h3>
          <h2>Capture it all, forget nothing!</h2>
          <p>
            Experience unmatched security with our advanced surveillance
            solutions, designed meticulously for both home and business
            environments
          </p>
          <button onClick={() => navigate("/contact")}>
            Talk to an Experts{" "}
            <i>
              <IoIosArrowForward />
            </i>
          </button>
        </div>

        <div className="security-class2">
          <img className="cam11" src={camera} alt="camera" />
          <img className="cam21" src={cam1} alt="camera" />
        </div>

        <div className="security-class3 reveal">
          <h2>Curated IP camera setup for enhanced safety and monitoring</h2>
          <div className="security-container">
            <div className="security-left">
              <div className="security-feature">
                <img src={logo1} alt="camera" />
                <h3>Intrusion detection</h3>
              </div>

              <div className="security-feature">
                <img src={logo2} alt="camera" />
                <h3>Built-in Mic</h3>
              </div>

              <div className="security-feature">
                <img src={logo3} alt="camera" />
                <h3>Coloured night vision</h3>
              </div>

              <div className="security-feature">
                <img src={logo4} alt="camera" />
                <h3>IP 67(Weather proof)</h3>
              </div>

              <div className="security-feature">
                <img src={logo5} alt="camera" />
                <h3>Line-crossing detection</h3>
              </div>

              <div className="security-feature">
                <img src={logo6} alt="camera" />
                <h3>Edge storage</h3>
              </div>
            </div>
            <div className="security-right">
              <img src={camera2} alt="camera" />
            </div>
          </div>
        </div>

        <div className="security-class4">
          <div className="class4-headings reveal">
            <h2>Custom built hardware stack</h2>
            <p>
              A customised setup to meet your surveillance needs at an
              affordable price
            </p>
          </div>
          <div className="class4-grids">
            <div className="cnta">
              <div className="cnt-class4 reveal">
                <h3>Network Switch</h3>
                <h4>Powers and connects cameras with one cable</h4>
              </div>
              <img src={cpa} alt="cpa" />
            </div>
            <div className="cnta">
              <div className="cnt-class4 reveal">
                <h3>NVR</h3>
                <h4>Records and plays back videos, with live viewing</h4>
              </div>
              <img src={cpa2} alt="cpa" />
            </div>

            <div className="cnta">
              <div className="cnt-class4 reveal">
                <h3>Cables</h3>
                <h4>Streamline camera connection, data transfer, and power</h4>
              </div>
              <img src={cpa3} alt="cpa" />
            </div>
            <div className="cnta">
              <div className="cnt-class4 reveal">
                <h3>Hard Disk</h3>
                <h4>Stores footage for up to 30 days</h4>
              </div>
              <img src={cpa4} alt="cpa" />
            </div>
            <div className="cnt cnt-img-full">
              <img className="icd" src={cpa5} alt="cpa" />
            </div>
          </div>
        </div>

        <div className="security-class5 reveal">
          <div className="security-heading-wrapper">
            <h3 className="headings-style-h3">
              Affordable price, guaranteed service
            </h3>
            <div>
              56 offers you peace of mind with priority support, comprehensive
              warranty and expert trouble shooting throughout your coverage
              period
            </div>
          </div>
          <div className="pricing-tables">
            <div className="table-headers">
              <div className="columns"></div>
              <div className="columns">Standard Package</div>
              <div className="columns premiums ac">premiums Package *</div>
            </div>
            <div className="table-body">
              {/* 2 MP Cameras */}
              <div className="rows">
                <div className="cells headers">2 MP Cameras</div>
                <div className="cells headers"></div>
                <div className="cells premiums"></div>
              </div>
              <div className="rows">
                <div className="cells">2 camera pack</div>
                <div className="cells">₹ 19,999</div>
                <div className="cells premiums">₹ 24,999</div>
              </div>
              <div className="rows">
                <div className="cells">4 camera pack</div>
                <div className="cells">₹ 34,999</div>
                <div className="cells premiums">₹ 39,999</div>
              </div>
              <div className="rows">
                <div className="cells">8 camera pack</div>
                <div className="cells">₹ 59,999</div>
                <div className="cells premiums">₹ 74,999</div>
              </div>
              <div className="rows">
                <div className="cells">16 camera pack</div>
                <div className="cells">₹ 1,19,999</div>
                <div className="cells premiums">₹ 1,39,999</div>
              </div>

              {/* 5 MP Cameras */}
              <div className="rows">
                <div className="cells headers">5 MP Cameras</div>
                <div className="cells headers"></div>
                <div className="cells premiums"></div>
              </div>
              <div className="rows">
                <div className="cells">2 camera pack</div>
                <div className="cells">₹ 29,999</div>
                <div className="cells premiums">₹ 34,999</div>
              </div>
              <div className="rows">
                <div className="cells">4 camera pack</div>
                <div className="cells">₹ 49,999</div>
                <div className="cells premiums">₹ 59,999</div>
              </div>
              <div className="rows">
                <div className="cells">8 camera pack</div>
                <div className="cells">₹ 89,999</div>
                <div className="cells premiums">₹ 1,09,999</div>
              </div>
              <div className="rows">
                <div className="cells">16 camera pack</div>
                <div className="cells">₹ 1,99,999</div>
                <div className="cells premiums">₹ 2,19,999</div>
              </div>
            </div>
          </div>
          <div className="package-descrips">
            <div className="pckgflexs">
              <img src={package1} alt="logo" />
            </div>

            <div className="pckgs-flex1 reveal">
              <div>*premiums package includes</div>
              <ul>
                <li>
                  Network switch with higher data transfer rate and higher power
                  budget
                </li>
                <li>4-year warranty on hard-disk</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="security-class6">
          <img src={cama} alt="camera" />
          <div>
            <h3>
              Experience the power of <br /> Home Security Cams
            </h3>
            <button onClick={() => navigate("/contact")}>
              Talk to an expert{" "}
              <i>
                <IoIosArrowForward />
              </i>
            </button>
          </div>
        </div>
        <div className="faq-container">
          <h2 className="faq-title reveal">Frequently Asked Questions</h2>

          {faqData.map((item, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question reveal"
                onClick={() => toggleQuestion(index)}
              >
                <h3>{item.question}</h3>
                <FaChevronDown
                  className={`arrow-icon ${
                    activeIndex === index ? "rotate" : ""
                  }`}
                />
              </div>
              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Security;
