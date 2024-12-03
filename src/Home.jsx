import React, { useEffect, useRef } from "react";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import { IoIosArrowForward } from "react-icons/io";
import house1 from "./images/house1.jpeg";
import homelogo1 from "./images/homelogo1.webp";
import homelogo2 from "./images/homelogo2.webp";
import homelogo3 from "./images/homelogo3.webp";
import homelogo4 from "./images/homelogo4.webp";
import homelogo5 from "./images/homelogo5.webp";
import homelogo6 from "./images/homelogo6.webp";
import homelogo7 from "./images/homelogo7.webp";
import homelogo8 from "./images/homelogo8.webp";
import homelogo9 from "./images/homelogo9.webp";
import section1 from "./images/section1.webp";
import section2 from "./images/section2.webp";
import section3 from "./images/section3.webp";
import secure1 from "./images/secure1.webp";
import secure2 from "./images/secure2.webp";
import secure3 from "./images/secure3.webp";
import timeline1 from "./images/timeline1.webp";
import timeline2 from "./images/timeline2.webp";
import timeline3 from "./images/timeline4.webp";
import timeline4 from "./images/timeline6.webp";
import timeline5 from "./images/timeline7.webp";
import privacy from "./images/privacy.png";
import { IoLogoApple } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  // Refs for the sections
  const sectionRefs = useRef([]);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150; // Adjust for when you want the reveal to happen

        if (
          elementTop < windowHeight - revealPoint &&
          !reveal.classList.contains("active")
        ) {
          reveal.classList.add("active");
        }
      });

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      sectionRefs.current.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          // Remove active class from all sections
          sectionRefs.current.forEach((sec) => sec.classList.remove("active"));
          // Add active class to the current section
          section.classList.add("active");
        }
      });

    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);
    handleScroll();


    

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Add refs for each section dynamically
  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="main-cont">
      <Header />
      {/* 1st portion */}
      <div className="flex reveal">
        <div className="flex1">
          <h1 className="heading-h1">
            Safeguard your <br /> <strong className="glow">home</strong>
          </h1>
          <p>
            Guarding your home with a connected system of{" "}
            <strong>AI Cameras and safety agents</strong> for quick response
          </p>
          <button onClick={() => navigate("/contact")}>
            Talk to an expert{" "}
            <i>
              <IoIosArrowForward className="arrow" />
            </i>
          </button>
        </div>
        <div className="flex2">
          <img src={house1} alt="house" />
        </div>
      </div>
      {/* 2nd Portion */}
      <div className="slider">
        <div className="slider-item">
          <img src={homelogo1} alt="homelogo" />
          <img src={homelogo2} alt="homelogo" />
          <img src={homelogo3} alt="homelogo" />
          <img src={homelogo4} alt="homelogo" />
          <img src={homelogo5} alt="homelogo" />
          <img src={homelogo6} alt="homelogo" />
          <img src={homelogo7} alt="homelogo" />
          <img src={homelogo8} alt="homelogo" />
          <img src={homelogo9} alt="homelogo" />
          <img src={homelogo1} alt="homelogo" />
          <img src={homelogo2} alt="homelogo" />
          <img src={homelogo3} alt="homelogo" />
          <img src={homelogo4} alt="homelogo" />
          <img src={homelogo5} alt="homelogo" />
          <img src={homelogo6} alt="homelogo" />
          <img src={homelogo7} alt="homelogo" />
          <img src={homelogo8} alt="homelogo" />
          <img src={homelogo9} alt="homelogo" />
        </div>
      </div>

      {/* 3rd Portion */}
      <div className="phone-cont">
        <div className="h3-heading">
          <h3 className="reveal">
            <strong>Secures you like</strong> nobody else
          </h3>
          <p>
            Stay in control of your security setup and know about everything
            that is happening on your property
          </p>
        </div>

        {/* Section 1 */}
        <div className="section" ref={addToRefs}>
          <div className="section-body">
            <div className="section-text">
              <h2>Monitor</h2>
              <p>Monitor your home cameras from anywhere</p>
            </div>
          </div>
          <div className="section-img">
            <div className="section-img-inner">
              <img src={section1} alt="section" />
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="section" ref={addToRefs}>
          <div className="section-body">
            <div className="section-text">
              <h2>KNOW WHAT'S HAPPENING</h2>
              <p>
                All updates about ypur property and people security at one place
              </p>
            </div>
          </div>
          <div className="section-img">
            <div className="section-img-inner">
              <img src={section2} alt="section" />
            </div>
          </div>
        </div>

        {/* Section 3 */}
        <div className="section" ref={addToRefs}>
          <div className="section-body">
            <div className="section-text">
              <h2>MAKE YOUR SYSTEM FOOL-PROOF</h2>
              <p>Instruct our guards to perform tasks for your home</p>
            </div>
          </div>
          <div className="section-img">
            <div className="section-img-inner">
              <img src={section3} alt="section" />
            </div>
          </div>
        </div>
      </div>
      {/* 4th portion */}
      <div className="secur-cont">
        <h3 className="reveal">
          <strong>Securing your</strong> home
        </h3>
        <p>
          Experience security that's proactive, precise, and always on point
        </p>
        <div className="secur-feature">
          <div className="feat-column">
            <div className="feat-img">
              <img src={secure1} alt="section" />
            </div>
            <div className="feat-text">
              <h4>Intelligent Eyes on your home</h4>
              <p>
                With cutting-edge sensors and algorithms, AI Cam doesn’t just
                see; it understands. From recognising faces to detecting
                suspicious activities, it keeps a vigilant eye on your store
              </p>
            </div>
          </div>

          <div className="feat-column">
            <div className="feat-img">
              <img src={secure2} alt="section" />
            </div>
            <div className="feat-text">
              <h4>Stay on top of everything that matters</h4>
              <p>
                Stay informed and alert with real-time updates on your home
                security status, directly to your device, wherever you are
              </p>
            </div>
          </div>

          <div className="feat-column">
            <div className="feat-img">
              <img src={secure3} alt="section" />
            </div>
            <div className="feat-text">
              <h4>Safety agents to help you with any home safety</h4>
              <p>
                Our safety agents are available 24*7 to assist you with any home
                safety.
              </p>
            </div>
          </div>
          <button onClick={() => navigate("/contact")} className="btn-a">
            Talk to an expert
            <i>
              <IoIosArrowForward className="arrow" />
            </i>
          </button>
        </div>
      </div>
      {/* 5th Portion */}

      <div className="timeline-container">
        <div className="time-class">
          <h3>Keeps you safe</h3>
          <h2>Like nothing else out there.</h2>
        </div>

        <div className="timeline-line">
          <div className="timeclass">
            <h2>Identify Threats</h2>
            <p>
              56 AI Cam One is equipped with advanced sensors that detect a
              range of activities, ensuring even subtle incidents don't slip
              through unnoticed.
            </p>
          </div>
          <div className="timeimg">
            <img src={timeline1} alt="timeline" />
          </div>

          <div className="timeclass">
            <h2>Interpret Situation</h2>
            <p>
              Leveraging sophisticated algorithms, the camera interprets
              detected motions, going beyond mere identification to understand
              the implications for your security.
            </p>
          </div>
          <div className="timeimg">
            <img src={timeline2} alt="timeline" />
          </div>

          <div className="timeclass">
            <h2>Initiate Emergency Response</h2>
            <p>
              Following the analysis, the camera responds swiftly to potential
              threats by triggering an alarm or activating a specific response
              from linked devices.
            </p>
          </div>
          <div className="timeimg">
            <img src={timeline3} alt="timeline" />
          </div>

          <div className="timeclass">
            <h2>Investigate Incident</h2>
            <p>
              Our command centre not only reviews every alert but can also deter
              potential intruders in real time through the 56 AI Cam One's
              two-way communication feature.
            </p>
          </div>
          <div className="timeimg">
            <img src={timeline4} alt="timeline" />
          </div>

          <div className="timeclass">
            <h2>Intervene and mitigate the threat</h2>
            <p>
              In the event of an emergency, our command centre collaborates with
              security agents to physically intervene, ensuring your premises
              stay secure.
            </p>
          </div>
          <div className="timeimg">
            <img src={timeline5} alt="timeline" />
          </div>
        </div>
      </div>

      <div className="privacy">
        <div className="privacy-top reveal">
          <img src={privacy} alt="privacy" />
          <h4>YOUR PRIVACY</h4>
          <h2>At the centre of it all</h2>
        </div>
        <div className="privacy-bottom reveal">
          <div className="priv-btm-cla">
            <h5>
              Cameras operate autonomously and store all data on the device
            </h5>
          </div>
          <div className="priv-btm-cla">
            <h5>Data on the secure app remains encrypted on your device</h5>
          </div>
          <div className="priv-btm-cla">
            <h5>
              All guards deployed by us go through thorough background checks
            </h5>
          </div>
          <div className="priv-btm-cla">
            <h5>Complete control over all the devices deployed on your site</h5>
          </div>
        </div>
        <div className="btn-strt1">
          <div className="btn-priv">
            <a href="https://play.google.com/store/apps/details?id=com.secure56.app" className="anchor">
              <button onClick={() => navigate("/contact")}>
                Get app for iPhone
                <i>
                  <IoLogoApple className="store"/>
                </i>
              </button>
            </a>
          </div>
          <div className="btn-priv">
            <a href="https://play.google.com/store/apps/details?id=com.secure56.app" className="anchor">
              <button onClick={() => navigate("/contact")}>
                Get app for Android
                <i>
                  <BiLogoPlayStore className="store"/>
                </i>
              </button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
