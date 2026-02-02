import React from "react";
import "./MyAppointmentsPage.css";
import Header from "./Header";
import Navbar from "./Navbar";
import { UseContextProvider } from "../Context/ContextProvider";
import doctorImg from "../assets/Doctor.png";
import {useNavigate} from 'react-router-dom';
const MyAppointmentsPage = () => {
  let navigate=useNavigate();
  const { Isopen } = UseContextProvider();
  return (
    <div
      style={{
        backgroundColor: "#e6f3ff",
        minHeight: "100vh",
      }}
    >
      <div className="fixed-header">
        <Header />
        <Navbar />
      </div>
      <div className={`page-content${Isopen ? " sidebar-open" : ""}`}>
        <h1
          style={{
            marginLeft: "80px",
            marginTop: "40px",
            marginBottom: "30px",
          }}
        >
          My Appointments
        </h1>
        {/* AppointDetails */}
        <div
          className="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative"
          style={{
            maxWidth: "800px",
            marginLeft: "80px",
            border: "5px solid #bcdcf9ff",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "16px",
          }}
        >
          <div className="col-auto d-none d-lg-block" style={{ width: "10%" }}>
            <img
              src={doctorImg}
              alt=""
              style={{
                height: "70px",
                width: "70px",
                borderRadius: "50%",
                objectFit: "cover",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            />
          </div>
          <div style={{ maxWidth: "60%" }}>
            <div className="col p-4 d-flex flex-column position-static">
              <div style={{ display: "flex" }}>
                <h3 style={{ marginBottom: "0", display: "inline" }}>Maran</h3>
                <div style={{ marginLeft: "500px" }}>
                  <p
                    style={{
                      display: "inline",
                      fontWeight: "bold",
                      backgroundColor:"#0056b3",
                      borderRadius:"10px",
                      padding:"5px",
                      color:"white"
                    }}
                  >
                    Booked
                  </p>
                </div>
              </div>
              <strong className="d-inline-block mb-2 text-primary-emphasis">
                Cardiogist
              </strong>
              <p className="card-text mb-auto">
                <span
                  style={{ fontWeight: "bold" }}
                  className="text-primary-emphasis"
                >
                  Descriptions:{" "}
                </span>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    marginLeft: "580px",
                  }}
                >
                  <p
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      margin: "0",
                    }}
                    className="text-primary-emphasis"
                  >
                    20/8/2000
                  </p>
                  <p
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      margin: "0",
                    }}
                    className="text-primary-emphasis"
                  >
                    12 Pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
                <div
          className="row g-0 overflow-hidden flex-md-row mb-4 h-md-250 position-relative"
          style={{
            maxWidth: "800px",
            marginLeft: "80px",
            border: "5px solid #bcdcf9ff",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderRadius: "16px",
          }}
        >
          <div className="col-auto d-none d-lg-block" style={{ width: "10%" }}>
            <img
              src={doctorImg}
              alt=""
              style={{
                height: "70px",
                width: "70px",
                borderRadius: "50%",
                objectFit: "cover",
                marginTop: "10px",
                marginLeft: "10px",
              }}
            />
          </div>
          <div style={{ maxWidth: "60%" }}>
            <div className="col p-4 d-flex flex-column position-static">
              <div style={{ display: "flex" }}>
                <h3 style={{ marginBottom: "0", display: "inline" }}>Maran</h3>
                <div style={{ marginLeft: "500px" }}>
                  <p
                    style={{
                      display: "inline",
                      fontWeight: "bold",
                      backgroundColor:"#eaeaea",
                      // backgroundColor:"#eaeaeaff",
                      borderRadius:"10px",
                      padding:"5px",
                      color:"#5d5d5dff",
                    }}
                  >
                    Expired
                  </p>
                </div>
              </div>
              <strong className="d-inline-block mb-2 text-primary-emphasis">
                Cardiogist
              </strong>
              <p className="card-text mb-auto">
                <span
                  style={{ fontWeight: "bold" }}
                  className="text-primary-emphasis"
                >
                  Remarks:{" "}
                </span>
                This is a wider card with supporting text below as a natural
                lead-in to additional content.
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <button style={{marginTop:"10px",backgroundColor:"#98c4f4ff",border:"none",height:"30px",borderRadius:"5px"}} type="button" onClick={()=>{
                  navigate('/medicalrecords')
                }}>Prescription</button>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    marginLeft: "470px",
                  }}
                >
                  <p
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      margin: "0",
                    }}
                    className="text-primary-emphasis"
                  >
                    20/8/2000
                  </p>
                  <p
                    style={{
                      display: "block",
                      fontWeight: "bold",
                      margin: "0",
                    }}
                    className="text-primary-emphasis"
                  >
                    12 Pm
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAppointmentsPage;
