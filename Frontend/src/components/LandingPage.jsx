import React from "react";
import "./LandingPage.css";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import bg from "../assets/fullhomebackground.png";
import acne from "../assets/acne.png";
import anxiety from "../assets/anxiety.png";
import child from "../assets/child.png";
import cold from "../assets/cold.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./Footer";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={logo}
            id="logo"
            alt="logo"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "100%",
              objectFit: "cover",
            }}
          />
          <p style={{ color: "white", marginBottom: "0%", marginLeft: "5px" }}>
            DocLink
          </p>
        </div>
        <div className="right-section">
          <p className="header-text">Contact</p>
          <button className="header-button">Login</button>
        </div>
      </header>

      {/* ===== Main Content ===== */}
      <main className="main-content">
        <h1>
          Connecting patients and doctors with care, compassion, and technology.
        </h1>

        {/* ===== Doctor / Visitor Cards ===== */}
        <div className="cards-container">
          <div className="card-box">
            <h2>Doctors</h2>
            <p>
              Connect with patients who need your expertise — anytime, anywhere.
              Join our platform to offer trusted care and grow your medical
              reach effortlessly.
            </p>
            <button className="header-button" onClick={() => navigate("/login")}>Sign In</button>
          </div>

          <div className="card-divider"></div>

          <div className="card-box">
            <h2>Visitors</h2>
            <p>
              Find and book appointments with the best doctors near you — in
              just a few clicks. Get trusted medical advice and quality care
              from top specialists anytime, anywhere.
            </p>
            <button className="header-button" onClick={() => navigate("/login")}>Sign In</button>
          </div>
        </div>

        {/* ===== Consultation Section ===== */}
        <section className="consult-section">
          <div className="consult-header">
            <h2>Consult Top Doctors Online for Any Health Concern</h2>
            <h5>
              Private online consultations with verified doctors across all
              specialties
            </h5>
          </div>

          <div className="consult-grid">
            <div className="consult-card">
              <img src={acne} alt="acne" />
              <p>Acne, Pimples or Skin Issues</p>
            </div>

            <div className="consult-card">
              <img src={anxiety} alt="anxiety" />
              <p>Stress, Anxiety or Depression</p>
            </div>

            <div className="consult-card">
              <img src={child} alt="child illness" />
              <p>Child Health Concerns</p>
            </div>

            <div className="consult-card">
              <img src={cold} alt="cold" />
              <p>Cold, Cough or Fever</p>
            </div>
          </div>
        </section>

        {/* Original carousel */}
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h2>What our users have to say</h2>
              <p>
                Excellent platform! User-friendly interface and quick
                appointments. A real lifesaver for health concerns.
              </p>
              <span>- Rahul Mehta</span>
            </div>
            <div class="carousel-item">
              <h2>What our users have to say</h2>
              <p>
                Great experience! Simple booking and professional doctors.
                Highly recommended for consultations.
              </p>
              <span>- Priya Sharma</span>
            </div>
            <div class="carousel-item">
              <h2>What our users have to say</h2>
              <p>
                Very helpful! Quick and easy booking with a great interface.
                Keeps my consultation history in one place.
              </p>
              <span>- Amit Mishra</span>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
