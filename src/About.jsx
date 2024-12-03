import React, {useEffect} from "react";
import "./About.css";
import Header from "./Header";
import Footer from "./Footer";
import Abouts from "./images/about.webp";
import ab22 from "./images/ab22.svg";
import ab23 from "./images/ab23.svg";
import ab24 from "./images/ab24.svg";
import aboutmid21 from "./images/aboutmid21.svg";
import story1 from './images/story1.svg';
import story2 from './images/story2.svg';
import { FaLinkedin } from "react-icons/fa";
import founder1 from "./images/founder1.webp";
import founder2 from "./images/founder2.webp";
import founder3 from "./images/founder3.webp";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  useEffect(() => {
    // Scroll to the top on component mount
    window.scrollTo(0, 0);

    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal");

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const revealPoint = 80; 

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
      <div className="about-cont">
        <div className="about-strt">
          <h2 className="reveal">
            SECURED • SMART • <strong>RELIABLE</strong>
          </h2>
          <h1 className="reveal">56 is on a mission to make security accessible to all</h1>
          <p className="reveal">
            We're building fully automated systems to transform the way safety,
            security, and process monitoring are achieved, via deep integration
            of computer vision, advanced location services, and real-time
            physical intervention.
          </p>
          <div className="about-img reveal">
            <img src={Abouts} alt="about" />
          </div>
        </div>

        <div className="about-mid">
          <div className="about1">
            <h2 className="reveal">56 at a glance</h2>
          </div>
          <div className="about2">
            <div className="about2-class">
              <div className="about-num">100+</div>
              <div className="about-p">employees</div>
            </div>
            <div className="about2-class">
              <div className="about-num">10000+</div>
              <div className="about-p">happy subscribers</div>
            </div>
            <div className="about2-class">
              <div className="about-num">1000's</div>
              <div className="about-p">of AI cameras installed</div>
            </div>
            <div className="about2-class">
              <div className="about-num">100's</div>
              <div className="about-p">of SOS resolved every week</div>
            </div>
          </div>
        </div>

        <div className="about2-mid">
          <div className="mid2-class1">
            <h2 className="reveal">Values that guide us</h2>
          </div>
          <div className="mid2-class2">
            <div className="mid2-child">
              <img src={aboutmid21} alt="mid2" />
              <div className="mid2-child-content">
                <h3>HELP EVER</h3>
                <div>
                  Every system, every action, and every service we provide is
                  built towards ensuring that our users receive the necessary
                  help, intervention, and peace of mind whenever they need it.
                </div>
              </div>
            </div>
            <div className="mid2-child">
              <img src={ab22} alt="mid2" />
              <div className="mid2-child-content" >
                <h3>PROTECT ALWAYS</h3>
                <div>
                  The purpose of 56's end-point and end-state interventions is
                  always to protect people, assets, premises, and communities -
                  wherever it is.
                </div>
              </div>
            </div>
            <div className="mid2-child">
              <img src={ab23} alt="mid2" />
              <div className="mid2-child-content">
                <h3>ACTION REAL-TIME</h3>
                <div>
                  The 56 tech monitoring and platform stack is structured to
                  always work in real-time - from monitoring to intervention and
                  everything in between.
                </div>
              </div>
            </div>
            <div className="mid2-child">
              <img src={ab24} alt="mid2" />
              <div className="mid2-child-content">
                <h3>PROGRESS IN CONTINUITY</h3>
                <div>
                  Security is like an ongoing journey rather than a fixed
                  destination. It'll always need us to keep learning, adapting,
                  and updating protocols and technology to stay ahead.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="story">
          <div className="story1 reveal">
            <h2>The story of 56 </h2>
          </div>
          <div className="story2">
            <div className="story2-class">
              <img src={story1} alt="story" />
              <div className="story-content">
                <h4>56 was born</h4>
                <div>
                  It all began when Troels, Sacheth, and Harshit, who met in their previous jobs, saw that security was limited only to an exclusive few people. And so they decided to solve this need gap to provide reliable and affordable security in India. Together they combined their background in computer vision, advanced location services, and real-time physical intervention to build a smart app that made security proactive, automated, and accessible. Thus, India’s first security subscription app was born: 56 Secure
                </div>
              </div>
            </div>

            <div className="story2-class">
              <img src={story2} alt="story" />
              <div className="story-content">
                <h4>Established our HQ in Bengaluru</h4>
                <div>
                  We set up our first office in Indiranagar, Bengaluru. We have then expanded our team to 100+ employees who are working to build a safer future for every citizen.
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="founders">
  <div className="found1 reveal">
    <h2>Meet our founders</h2>
    <p>We're a group of customer-centric, out-of-the-box thinkers who make the future of security accessible today.</p>
  </div>
  
  <div className="founder-grid">
    <div className="founder-fulldetail">
      <img src={founder1} alt="founder" className="founder-image"/>
      <div className="found-details">
        <h4 className="founder-name">Sacheth Kadam</h4>
        <a href="https://www.linkedin.com/in/sacheth/"><i className="linkedin-icon"><FaLinkedin /></i></a>
      </div>
    </div>
    
    <div className="founder-fulldetail">
      <img src={founder2} alt="founder" className="founder-image"/>
      <div className="found-details">
        <h4 className="founder-name">Sacheth Kadam</h4>
       <a href="https://www.linkedin.com/in/harshitsharma1/"> <i className="linkedin-icon"><FaLinkedin /></i></a>
      </div>
    </div>
    
    <div className="founder-fulldetail">
      <img src={founder3} alt="founder" className="founder-image"/>
      <div className="found-details">
        <h4 className="founder-name">Sacheth Kadam</h4>
      <a href="https://www.linkedin.com/in/rajiv-subramanian-2a115130">  <i className="linkedin-icon"><FaLinkedin /></i></a>
      </div>
    </div>
  </div>
</div>

<div className="join">
<div className="join1 reveal">
<h2 className="join1-h2">Come, join us</h2>
<p className="join1-p1">We believe in fostering a holistic and dynamic workplace where you can create, innovate and thrive!</p>
<button onClick={() => navigate("/contact")} className="join1-btn">See Open Positions 
<i><IoIosArrowForward /></i>
</button>
<div className="join-a"><a href="https://outlook.com">jobs@56secure.com</a></div>

</div>
</div>

        </div>
        <Footer />
      </div>
      );
}

      export default About;
