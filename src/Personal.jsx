import React, {useState, useEffect} from "react";
import Header from "./Header";
import Footer from "./Footer";
import prsnl from "./images/prsnl.webp";
import { IoIosArrowForward } from "react-icons/io";
import prsnl2 from "./images/prsnl2.svg";
import prsnl3 from "./images/prsnl4.svg";
import prsnl4 from "./images/prsnl5.svg";
import { FaChevronDown } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";
import { BiLogoPlayStore } from "react-icons/bi";

function Personal() {
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
      question: "What is 56 Secure Personal Security Plan?",
      answer:
        "56 Secure Personal Security Plan is a comprehensive safety solution designed to provide quick assistance in emergency situations. It includes an SOS feature that allows you to call for help, and our security guards will reach you within minutes to assess the situation.",
    },
    {
      question: "Can 56 Secure’s guards reach me anywhere in the city?",
      answer:
        "Our team of dedicated guards is currently active in some selected areas in Bangalore. However, our security team will reach out to you promptly, via call, once you have triggered an SOS to assess your situation. If required, we maintain direct channels with the Bengaluru Police Department to address and manage any potential threats or escalations",
    },
    {
      question: "What is the response time for the guards to reach me?",
      answer:
        "Our security guards are trained to respond swiftly. In most cases, they will reach you within minutes of receiving an SOS alert. Available only in selected areas in Bangalore*",
    },
    {
      question: "How do I purchase the Personal Security Plan?",
      answer:
        "To purchase our Personal Security Plan, simply click on the button below to make your purchase. Download the 56 Secure app to access this feature.",
    },
    {
      question: "Can I cancel or modify my plan at any time?",
      answer: "Yes, you can cancel or modify your plan at any time.",
    },
    {
        question: "Is this service available 24/7?",
        answer: "Yes, our security service is available 24/7, ensuring you have access to assistance whenever you need it.",
      },
      {
        question: "How do I share my location with loved ones while travelling?",
        answer: "You can easily share your real-time location with loved ones through our mobile app, allowing them to track your whereabouts and ensure your safety.",
      },
      {
        question: "Is my personal information and data secure with 56 Secure?",
        answer: "We take data privacy and security seriously. Your personal information is encrypted and protected, and we adhere to strict privacy policies.",
      },
  ];



  const toggleQuestion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="main-cont">
      <Header />
      <div className="promo-section1 reveal">
        <div className="promo-content">
          <h1 className="promo-title">
            Personal Safety
            <br />
            at a click
          </h1>
          <p className="promo-description">
            56 Secure is just a tap away to ensure you are safe and protected,
            always.
          </p>
          <button className="promo-button">
            Buy now{" "}
            <i>
              <IoIosArrowForward />
            </i>{" "}
          </button>
        </div>
        <div className="promo-image">
          <img src={prsnl} alt="Promo" />
        </div>
      </div>

      <div className="promo-section2">
        <div className="section-class1">
          <div className="left-content reveal">
            <h3>REAL STORIES</h3>
            <h2>We’ve got you covered in all situations</h2>
            <div className="sec-flex-promo">
              <img src={prsnl2} alt="prsnl" />
              <div className="text-content">
                <h2>Confronted a stalker</h2>
                <h4>
                  “I was walking back home with a friend after a late-night
                  party. We noticed that someone was following us but did not
                  dare look back. That’s when we saw 56’s guard on his scooty.
                  We approached him to handle the issue.”
                </h4>
              </div>
            </div>
            <div className="sec-flex-promo">
              <img src={prsnl3} alt="prsnl" />
              <div className="text-content">
                <h2>My lost wallet was returned</h2>
                <h4>
                  “My wallet went missing after shopping. I searched my home
                  thoroughly but couldn't post find it. After a while, I got a
                  call from team 56. Their guard found my wallet during their
                  patrols. They traced my details and handed over my wallet in
                  person.”
                </h4>
              </div>
            </div>
            <div className="sec-flex-promo">
              <img src={prsnl4} alt="prsnl" />
              <div className="text-content">
                <h2>Found my lost puppy</h2>
                <h4>
                  My puppy went missing when I reached home. I got really scared
                  and immediately tapped on the SOS. Their team coordinated and
                  found him in less than 19 mins.
                </h4>
              </div>
            </div>
          </div>
          <div className="personal-saftey-video w-embed">
            <video controls autoPlay playsInline muted width="100%">
              <source src="https://api-files.sproutvideo.com/file/4490d1b4191be7cecd/a1a462f81f64086e/1080.mp4" />
            </video>
          </div>
        </div>
      </div>

      <div className="faq-container-prsnl">
          <h2 className="faq-title-prsnl reveal">Frequently Asked Questions</h2>

          {faqData.map((item, index) => (
            <div key={index} className="faq-item-prsnl reveal">
              <div
                className="faq-question-prsnl"
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
                <div className="faq-answer-prsnl">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="btn-strt2 reveal">
          <div className="btn-priv2">
            <a href="https://play.google.com/store/apps/details?id=com.secure56.app" className="anchor">
              <button>
                Get app for iPhone
                <i>
                  <IoLogoApple className="store"/>
                </i>
              </button>
            </a>
          </div>
          <div className="btn-priv2">
            <a href="https://play.google.com/store/apps/details?id=com.secure56.app" className="anchor">
              <button>
                Get app for Android
                <i>
                  <BiLogoPlayStore className="store"/>
                </i>
              </button>
            </a>
          </div>
        </div>

      <Footer />
    </div>
  );
}

export default Personal;
