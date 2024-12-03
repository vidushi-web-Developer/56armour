import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Contacts from "./images/contact.webp";
import "./Contact.css";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import Select from "react-select";
import { useNavigate } from "react-router-dom";
import countryOptions from "./CountryOption";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    pincode: "",
    propertyName: "",
    propertyType: "",
    countryCode: "",
    solutions: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    pincode: "",
    propertyName: "",
    propertyType: "",
    solutions: "",
  });

  const validate = () => {
    let isValid = true;
    const newErrors = {
      name: "",
      phone: "",
      pincode: "",
      propertyName: "",
      propertyType: "",
      solutions: "",
    };

    // Validate Name
    if (!formData.name.trim()) {
      newErrors.name = "Please complete this required field.";
      isValid = false;
    } else if (!/^[a-zA-Z\s]{3,30}$/.test(formData.name)) {
      newErrors.name =
        "Name must be alphabets only and between 3-30 characters.";
      isValid = false;
    }

    // Validate Phone
    if (!formData.phone.trim()) {
      newErrors.phone = "Please complete this required field.";
      isValid = false;
    } else if (formData.phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits.";
      isValid = false;
    }

    // Validate Pincode
    if (!formData.pincode.trim()) {
      newErrors.pincode = "Please complete this required field.";
      isValid = false;
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Pincode must be a 6-digit number.";
      isValid = false;
    }

    // Validate Property Name
    if (!formData.propertyName.trim()) {
      newErrors.propertyName = "Please complete this required field.";
      isValid = false;
    }

    // Validate Property Type
    if (!formData.propertyType) {
      newErrors.propertyType = "Please complete this required field.";
      isValid = false;
    }
    // Validate Solution
    if (formData.solutions.length === 0) {
      newErrors.solutions = "Please complete this required field.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (selectedOption) => {
    setFormData({
      ...formData,
      countryCode: selectedOption.value,
      phone: selectedOption.value,
    });
  };

  const handlePhoneChange = (e) => {
    const inputPhone = e.target.value;
    setFormData({
      ...formData,
      phone:
        formData.countryCode + inputPhone.replace(formData.countryCode, ""),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      axios
        .post("http://localhost:3001/contact", formData)
        .then((response) => {
          toast.success("Contact Form Submitted!", {
            position: "top-left",
            autoClose: 2000,
            onClose: () => navigate("/"),
          });
        })
        .catch((error) => {
          toast.error("Error submitting form.");
        });
    }
  };

  const handleSolutionChange = (solution) => {
    setFormData((prevData) => {
      const updatedSolutions = prevData.solutions.includes(solution)
        ? prevData.solutions.filter((item) => item !== solution)
        : [...prevData.solutions, solution];

      return { ...prevData, solutions: updatedSolutions };
    });
  };

  return (
    <>
      <div className="main">
        <Header />
        <div className="main-class">
          <div className="left">
            <h2>Contact Us</h2>
            <img src={Contacts} alt="contact" />
          </div>
          <div className="right">
            <form className="form" onSubmit={handleSubmit}>
              <div>
                <label>Name*</label>
                <input
                  name="name"
                  placeholder="Vidushi"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>
              <div>
                <label>Phone number*</label>
                <div className="phone-group">
                  <Select
                    options={countryOptions}
                    placeholder="Select Country"
                    onChange={handleCountryChange}
                    className="country-select"
                    isSearchable
                  />
                  <input
                    name="phone"
                    placeholder="Phone Number"
                    type="text"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    disabled={!formData.countryCode}
                  />
                </div>
                {errors.phone && (
                  <p className="error-message">{errors.phone}</p>
                )}
              </div>
              <div>
                <label>Pincode*</label>
                <input
                  name="pincode"
                  type="text"
                  value={formData.pincode}
                  onChange={handleChange}
                />
                {errors.pincode && (
                  <p className="error-message">{errors.pincode}</p>
                )}
              </div>
              <div>
                <label>Property Name*</label>
                <input
                  name="propertyName"
                  type="text"
                  value={formData.propertyName}
                  onChange={handleChange}
                />
                {errors.propertyName && (
                  <p className="error-message">{errors.propertyName}</p>
                )}
              </div>

              <div className="container1-form">
                <label>Property Type*</label>
                <select
                  className="container-class"
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Please Select
                  </option>
                  <option value="Housing Complex">Housing Complex</option>
                  <option value="Industrial Enterprise">
                    Industrial Enterprise
                  </option>
                  <option value="Commercial Spaces">Commercial Spaces</option>
                  <option value="Office Space">Office Space</option>
                  <option value="Hospitality">Hospitality</option>
                  <option value="Institutions">Institutions</option>
                  <option value="Events">Events</option>
                  <option value="Others">Others</option>
                </select>
                {errors.propertyType && (
                  <p className="error-message">{errors.propertyType}</p>
                )}
              </div>

              <div>
                <label>Solution Required*</label>
                <ul>
                  {[
                    "AI Camera",
                    "Man-guarding",
                    "Vehicle Management (ANPR)",
                    "Boom Barrier Automation",
                    "Visitor Management",
                    "Attendance Management",
                    "App Based Emergency Response",
                    "Intrusion Detection & Intervention",
                    "Video Management System",
                    "Guard Management System",
                  ].map((solution) => (
                    <li key={solution}>
                      <input
                        type="checkbox"
                        checked={formData.solutions.includes(solution)}
                        onChange={() => handleSolutionChange(solution)}
                      />{" "}
                      {solution}
                    </li>
                  ))}
                </ul>
                {errors.solutions && (
                  <p className="error-message1">{errors.solutions}</p>
                )}
              </div>

              <div className="submit-btn">
                <button>Submit</button>
              </div>
            </form>
            <ToastContainer
              position="top-right"
              hideProgressBar
              closeButton={false}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Contact;
