import React, { useState } from "react";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import cardiologyImg from "../assets/cardiology.png";
import neurologyImg from "../assets/Neurology.png";
import orthopedicsImg from "../assets/Orthopedics.png";
import dermatology from "../assets/Dermatology.png";
import pediatrics from "../assets/Pediatrics.png";
import psychiatry from "../assets/Psychiatry.png";
import Articles from "./Articles";

const HomePage = () => {
  const [selectedLocation, setSelectedLocation] = useState(
    "Select the location"
  );

  const handleSelect = (location) => {
    setSelectedLocation(location);
  };

  return (
    <>
      {/* Hero Section */}
      <div
        className="container-fluid d-flex flex-column align-items-center justify-content-center"
        style={{
          backgroundColor: "aqua",
          height: "460px",
          textAlign: "center",
          padding: "40px 0",
        }}
      >
        <h1
          style={{
            color: "white",
            fontFamily: "serif",
            fontSize: "46px",
            marginBottom: "50px",
          }}
        >
          Trusted Doctors, Personalized Care — Just a Click Away
        </h1>
        <h2
          style={{
            color: "white",
            fontFamily: "serif",
            fontSize: "36px",
            marginBottom: "50px",
          }}
        >
          Find And Book
        </h2>

        {/* Dropdown */}
        <div style={{ display: "flex", gap: "1px" }}>
          <button
            class="btn dropdown-toggle bordered-dropdown"
            style={{ backgroundColor: "white", width: "250px" }}
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select the Location
          </button>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">
                Action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Another action
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
            </li>
            <li>
              <hr class="dropdown-divider" />
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </li>
          </ul>
          <input
            type="text"
            class="bordered-dropdown"
            style={{ height: "100%", width: "550px", paddingLeft: "10px" }}
            aria-label="Text input with dropdown button"
            placeholder="Search doctors,clinics,hospitals,etc"
          />
        </div>
      </div>

      {/* Doctor Specialties Section */}
      <div className="container mt-4">
        <div className="row">
          {[
            {
              img: cardiologyImg,
              title: "Cardiology",
              content:
                "Expert care for your heart and vascular health. We diagnose and treat heart conditions, focusing on prevention and a strong, healthy rhythm for life.",
            },
            {
              img: neurologyImg,
              title: "Neurology",
              content:
                "Specialized treatment for the brain, spine, and nervous system. We help manage complex conditions like stroke, migraine, and epilepsy to ensure optimal neurological function.",
            },
            {
              img: orthopedicsImg,
              title: "Orthopedics",
              content:
                "Restoring mobility and strength through comprehensive care for bones, joints, muscles, and ligaments. Get back in motion after injury or joint pain.",
            },
            {
              img: pediatrics,
              title: "Pediatrics",
              content:
                "Dedicated, compassionate care for infants, children, and teens. We support their physical, developmental, and behavioral health from birth through adolescence.",
            },
            {
              img: dermatology,
              title: "Dermatology",
              content:
                "Treatment for all conditions of the skin, hair, and nails. From acne and eczema to routine cancer screenings, we help you achieve healthy skin.",
            },
            {
              img: psychiatry,
              title: "Psychiatry",
              content:
                "Professional care and support for mental health and emotional well-being. We offer expert assessment and treatment for anxiety, depression, and stress management.",
            },
          ].map((specialty, index) => (
            <div className="col-md-4 text-center mb-4" key={index}>
              <div
                style={{
                  boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                  padding: "15px",
                  borderRadius: "8px",
                  backgroundColor: "white",
                  height: "100%",
                }}
              >
                <img
                  src={specialty.img}
                  alt={specialty.title}
                  className="rounded-circle"
                  width="120"
                  height="120"
                />
                <h4 className="fw-normal mt-3" style={{ fontSize: "1.2rem" }}>
                  {specialty.title}
                </h4>
                <p style={{ fontSize: "0.85rem" }}>{specialty.content}</p>
                <p>
                  <a className="btn btn-secondary btn-sm" href="#">
                    View details »
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Article */}
        <Articles/>
      </div>
    </>
  );
};

export default HomePage;
