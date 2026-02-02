import Header from "./Header";
import "./HomePage.css";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import cardiologyImg from "../assets/cardiology.png";
import neurologyImg from "../assets/Neurology.png";
import orthopedicsImg from "../assets/Orthopedics.png";
import dermatology from "../assets/Dermatology.png";
import pediatrics from "../assets/Pediatrics.png";
import psychiatry from "../assets/Psychiatry.png";
import Articles from "./Articles";
import { UseContextProvider } from "../Context/ContextProvider";
import { useEffect, useState } from "react";
import Footer from "./Footer";

const HomePage = () => {
  const [newsdata, setnewsData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/home")
      .then((res) => res.json())
      .then((data) => {setnewsData(data);
        console.log(data);
      })
      .catch((err) => console.error("Error:", err));
  }, []);
  
  const { Isopen } = UseContextProvider();
  const specialties = [
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
        "Specialized care for neurological conditions with advanced diagnostic and treatment options.",
    },
    {
      img: orthopedicsImg,
      title: "Orthopedics",
      content:
        "Expert care for bone and joint health, offering comprehensive treatment for musculoskeletal conditions.",
    },
    {
      img: dermatology,
      title: "Dermatology",
      content:
        "Professional skin care services for all your dermatological needs.",
    },
    {
      img: pediatrics,
      title: "Pediatrics",
      content: "Compassionate care for children's health and development.",
    },
    {
      img: psychiatry,
      title: "Psychiatry",
      content:
        "Mental health support and treatment from experienced professionals.",
    },
  ];

  return (
    <div
      className="HomePage"
      style={{
        backgroundColor: "#e6f3ff", // Light blue background
        minHeight: "100vh",
      }}
    >
      <div className="fixed-header">
        <Header />
        <Navbar />
      </div>

      <div className={`page-content ${Isopen ? "sidebar-open" : ""}`}>
        {/* Hero Section */}
        <div
          className="container-fluid d-flex flex-column align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0, 255, 255, 0.8)",
            height: "460px",
            textAlign: "center",
            padding: "40px 0",
            marginBottom: "2rem",
          }}
        >
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
            <div style={{ position: "relative", width: "500px" }}>
              <input
                type="text"
                className="bordered-dropdown"
                style={{
                  height: "50px",
                  width: "100%",
                  paddingLeft: "40px",
                }}
                aria-label="Text input with dropdown button"
                placeholder="Search doctors..."
              />
              <i
                className="bi bi-search"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "12px",
                  transform: "translateY(-50%)",
                  color: "#999",
                  pointerEvents: "none",
                  fontSize: "20px",
                }}
              ></i>
            </div>
          </div>
        </div>

        {/* Doctor Specialties Section */}
        <div className="container mt-4">
          <div className="row">
            {specialties.map((specialty, index) => (
              <div className="col-md-4 text-center mb-4" key={index}>
                <div
                  style={{
                    boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
                    padding: "15px",
                    borderRadius: "8px",
                    backgroundColor: "white",
                    height: "100%",
                    marginBottom: "20px",
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
          {newsdata && <Articles newsdata={newsdata}/>}
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default HomePage;
