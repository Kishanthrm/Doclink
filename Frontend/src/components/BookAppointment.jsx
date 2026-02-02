import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Card, Row, Col, Image, Button } from "react-bootstrap";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./BookAppointment.css";
import { UseContextProvider } from "../Context/ContextProvider";
import { BsHandThumbsUpFill } from "react-icons/bs";
import doctorImg from "../../public/neha sharma profile.jpg";

const BookAppointment = () => {
  const { Isopen } = UseContextProvider();

  const [isGenderDropDown, setIsGenderDropDown] = useState(false);
  const [isExpeienceDropDown, setIsExpeienceDropDown] = useState(false);
  const [isFeesDropDown, setIsFeesDropDown] = useState(false);
  const [isAvailabilityDropDown, setIsAvailabilityDropDown] = useState(false);
  const [docData, setDocData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/bookappointments")
      .then((response) => response.json())
      .then((data) => {
        setDocData(data);
      })
      .catch((err) => console.log("Error: " + err));
  }, []);

  return (
    <div
      className={`AppoinmentPage ${Isopen ? "sidebar-open" : ""}`}
      style={{
        backgroundColor: "#e6f3ff",
        minHeight: "100vh",
      }}
    >
      <div className="fixed-header">
        <Header />
        <Navbar />
      </div>

      <div
        style={{
          backgroundColor: "white",
          height: "160px",
          marginTop: "0%",
          paddingTop: "0%",
        }}
      >
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

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          background: "#1e3a8a",
          height: "60px",
          justifyContent: "center",
          alignItems: "center",
          gap: "25px",
          color: "white",
          fontSize: "20px",
        }}
      >
        Filter By :
        <Dropdown
          show={isGenderDropDown}
          onClick={() => setIsGenderDropDown(true)}
          onMouseLeave={() => setIsGenderDropDown(false)}
        >
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic"
            className="dropdown-toggle"
          >
            Gender
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Male</Dropdown.Item>
            <Dropdown.Item href="#">Female</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown
          show={isExpeienceDropDown}
          onClick={() => setIsExpeienceDropDown(true)}
          onMouseLeave={() => setIsExpeienceDropDown(false)}
        >
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic"
            className="dropdown-toggle"
          >
            Experience
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">5+ Years of experience</Dropdown.Item>
            <Dropdown.Item href="#">10+ Years of experience</Dropdown.Item>
            <Dropdown.Item href="#">15+ Years of experience</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown
          show={isFeesDropDown}
          onClick={() => setIsFeesDropDown(true)}
          onMouseLeave={() => setIsFeesDropDown(false)}
        >
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic"
            className="dropdown-toggle"
          >
            Fees
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">₹0-₹500</Dropdown.Item>
            <Dropdown.Item href="#">Above ₹500</Dropdown.Item>
            <Dropdown.Item href="#">Above ₹1000</Dropdown.Item>
            <Dropdown.Item href="#">Above ₹1500</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown
          show={isAvailabilityDropDown}
          onClick={() => setIsAvailabilityDropDown(true)}
          onMouseLeave={() => setIsAvailabilityDropDown(false)}
        >
          <Dropdown.Toggle
            variant="primary"
            id="dropdown-basic"
            className="dropdown-toggle"
          >
            Availability
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Available in next 4 hours</Dropdown.Item>
            <Dropdown.Item href="#">Available today</Dropdown.Item>
            <Dropdown.Item href="#">Available tomorrow</Dropdown.Item>
            <Dropdown.Item href="#">Available in next 7 days</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div>
        <div className="heading">Our Best Doctors</div>
        {docData.length === 0 ? (
          <p>Loading doctors...</p>
        ) : (
          docData.map((doctor, index) => (
            <Card
              key={index}
              className="mb-4 mx-auto p-0 doctor-appointment-card"
              style={{
                maxWidth: "800px",
                border: "5px solid #bcdcf9ff",
                boxShadow:
                  "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                borderRadius: "16px",
                margin: "50px",
              }}
            >
              <Row className="g-0 overflow-hidden flex-md-row">
                <Col xs="auto" className="d-none d-lg-block p-2">
                  <Image
                    src={
                    doctor.doc_profile_img
                      ? `data:image/jpeg;base64,${doctor.doc_profile_img}`
                      : doctorImg
                  }
                    alt="Doctor"
                    roundedCircle
                    style={{
                      height: "120px",
                      width: "120px",
                      objectFit: "cover",
                    }}
                    className="mt-4 ms-3"
                  />
                </Col>

                <Col>
                  <div className="p-4 d-flex flex-column position-static">
                    <div className="d-flex justify-content-between align-items-center">
                      <h3 className="mb-0">{doctor.doc_name}</h3>
                    </div>
                    <strong className="d-inline-block mb-1 text-primary-emphasis">
                      {doctor.doc_specialisation}
                    </strong>
                    <p className="mb-1" style={{ fontWeight: "400" }}>
                      {doctor.doc_experience} Years of experience
                    </p>
                    <p className="mb-2" style={{ fontWeight: "400" }}>
                      {doctor.doc_qualification}
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <div
                        className="bg-success text-white d-flex align-items-center fw-bold me-3"
                        style={{
                          padding: "5px 12px",
                          borderRadius: "6px",
                          fontSize: "18px",
                          lineHeight: "1.2",
                          height: "30px",
                          width: "90px",
                        }}
                      >
                        <BsHandThumbsUpFill
                          style={{ marginRight: "5px", height: "15px" }}
                        />
                        98%
                      </div>
                      <div className="d-flex align-items-center">
                        <span className="me-2 text-muted">Languages:</span>
                        <span className="fw-bold">{doctor.doc_language}</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-3">
                      <div className="d-flex flex-column">
                        <p className="text-primary-emphasis mb-0 fs-5">
                          ₹300 Consultation fee
                        </p>
                      </div>
                      <div className="d-flex justify-content-end mt-2 me-3">
                        <Button className="details-button">View Details</Button>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          ))
        )}
      </div>

      <div style={{ paddingTop: "100px" }}>
        <Footer />
      </div>
    </div>
  );
};

export default BookAppointment;
