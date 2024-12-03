import React, {useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Cctv.css";
import { IoIosArrowForward } from "react-icons/io";
import camera from "./images/camera1.webp";
import cam1 from "./images/cam1.webp";
import logo1 from "./images/clogo1.svg";
import logo2 from "./images/clogo2.svg";
import logo3 from "./images/clogo3.svg";
import logo4 from "./images/clogo4.svg";
import logo5 from "./images/clogo5.svg";
import logo6 from "./images/clogo6.svg";
import camera2 from "./images/cam2.webp";
import cpa from "./images/cap1.webp";
import cpa2 from "./images/cap2.webp";
import cpa3 from "./images/cap3.webp";
import cpa4 from "./images/cap4.webp";
import cpa5 from "./images/cap5.webp";
import package1 from "./images/package.svg";
import cama from "./images/camar.jpg";
import { useNavigate } from "react-router-dom";

function Cctv() {
  const navigate = useNavigate();

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


  return (
    <div>
      <Header />
      <div className="cctv">
        <div className="cctv-class1">
          <h3 className="reveal">56 CCTV CAMS</h3>
          <h2 className="reveal">See everything, miss nothing!</h2>
          <p className="reveal">Precision surveillance crafted for your home and business</p>
          <button>
            <a href="/contact">
              Talk to an Experts{" "}
              <i>
                <IoIosArrowForward />
              </i>
            </a>
          </button>
        </div>

        <div className="cctv-class2">
          <img className="cam1" src={camera} alt="camera" />
          <img className="cam2" src={cam1} alt="camera" />
        </div>

        <div className="cctv-class3">
          <h2>Curated IP camera setup for enhanced safety and monitoring</h2>
          <div className="cctv-container reveal">
            <div className="cctv-left">
              <div className="cctv-feature">
                <img src={logo1} alt="camera" />
                <h3>Intrusion detection</h3>
              </div>

              <div className="cctv-feature">
                <img src={logo2} alt="camera" />
                <h3>Built-in Mic</h3>
              </div>

              <div className="cctv-feature">
                <img src={logo3} alt="camera" />
                <h3>Coloured night vision</h3>
              </div>

              <div className="cctv-feature">
                <img src={logo4} alt="camera" />
                <h3>IP 67(Weather proof)</h3>
              </div>

              <div className="cctv-feature">
                <img src={logo5} alt="camera" />
                <h3>Line-crossing detection</h3>
              </div>

              <div className="cctv-feature">
                <img src={logo6} alt="camera" />
                <h3>Edge storage</h3>
              </div>
            </div>
            <div className="cctv-right">
              <img src={camera2} alt="camera" />
            </div>
          </div>
        </div>

        <div className="cctv-class4">
          <div className="class4-heading">
            <h2>Custom built hardware stack</h2>
            <p>
              A customised setup to meet your surveillance needs at an
              affordable price
            </p>
          </div>
          <div className="class4-grid reveal">
            <div className="cnt">
              <div className="cnt-class">
                <h3>Network Switch</h3>
                <h4>Powers and connects cameras with one cable</h4>
              </div>
              <img src={cpa} alt="cpa" />
            </div>
            <div className="cnt">
              <div className="cnt-class">
                <h3>NVR</h3>
                <h4>Records and plays back videos, with live viewing</h4>
              </div>
              <img src={cpa2} alt="cpa" />
            </div>

            <div className="cnt">
              <div className="cnt-class">
                <h3>Cables</h3>
                <h4>Streamline camera connection, data transfer, and power</h4>
              </div>
              <img src={cpa3} alt="cpa" />
            </div>
            <div className="cnt">
              <div className="cnt-class">
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

        <div className="cctv-class5">
          <div className="cctv-heading-wrapper">
            <h3 className="heading-style-h3 reveal">
              Affordable price, guaranteed service
            </h3>
            <div>
              56 offers you peace of mind with priority support, comprehensive
              warranty and expert trouble shooting throughout your coverage
              period
            </div>
          </div>
          <div className="pricing-table">
            <div className="table-header reveal">
              <div className="column"></div>
              <div className="column">Standard Package</div>
              <div className="column premium ac">Premium Package *</div>
            </div>
            <div className="table-body">
              {/* 2 MP Cameras */}
              <div className="row">
                <div className="cell header">2 MP Cameras</div>
                <div className="cell header"></div>
                <div className="cell premium"></div>
              </div>
              <div className="row">
                <div className="cell">2 camera pack</div>
                <div className="cell">₹ 19,999</div>
                <div className="cell premium">₹ 24,999</div>
              </div>
              <div className="row">
                <div className="cell">4 camera pack</div>
                <div className="cell">₹ 34,999</div>
                <div className="cell premium">₹ 39,999</div>
              </div>
              <div className="row">
                <div className="cell">8 camera pack</div>
                <div className="cell">₹ 59,999</div>
                <div className="cell premium">₹ 74,999</div>
              </div>
              <div className="row">
                <div className="cell">16 camera pack</div>
                <div className="cell">₹ 1,19,999</div>
                <div className="cell premium">₹ 1,39,999</div>
              </div>

              {/* 5 MP Cameras */}
              <div className="row">
                <div className="cell header">5 MP Cameras</div>
                <div className="cell header"></div>
                <div className="cell premium"></div>
              </div>
              <div className="row">
                <div className="cell">2 camera pack</div>
                <div className="cell">₹ 29,999</div>
                <div className="cell premium">₹ 34,999</div>
              </div>
              <div className="row">
                <div className="cell">4 camera pack</div>
                <div className="cell">₹ 49,999</div>
                <div className="cell premium">₹ 59,999</div>
              </div>
              <div className="row">
                <div className="cell">8 camera pack</div>
                <div className="cell">₹ 89,999</div>
                <div className="cell premium">₹ 1,09,999</div>
              </div>
              <div className="row">
                <div className="cell">16 camera pack</div>
                <div className="cell">₹ 1,99,999</div>
                <div className="cell premium">₹ 2,19,999</div>
              </div>
            </div>
          </div>
          <div className="package-descrip">
            <div className="pckgflex">
              <img src={package1} alt="logo" />
            </div>

            <div className="pckg-flex1">
              <div>*Premium package includes</div>\
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
        <div className="cctv-class6 reveal">
          <img src={cama} alt="camera" />
          <div>
            <h3>Experience the power of <br /> 56 IP Cams</h3>
            <button onClick={() => navigate("/contact")}>
              Talk to an expert{" "}
              <i>
                <IoIosArrowForward />
              </i>
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Cctv;
