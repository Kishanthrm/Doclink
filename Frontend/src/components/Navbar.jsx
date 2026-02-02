import React, { useState } from "react";
import "./Sidebar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { UseContextProvider } from "../Context/ContextProvider";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { Isopen, setIsOpen } = UseContextProvider();
  const toggleSidebar = () => {
    setIsOpen(!Isopen);
  };
  return (
    <div>
      <div className="menu-icon" onClick={toggleSidebar}>
        <i className={`bi ${Isopen ? "bi-x-lg" : "bi-list"}`}></i>
      </div>
      <div className={`sidebar ${Isopen ? "open" : "closed"}`}>
        <p className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none" />
        <p>
          <svg
            className="bi pe-none me-2"
            width="40"
            height="32"
            aria-hidden="true"
          >
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4 text-white bg-none">Patient-Menu</span>
        </p>

        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
          <li className="nav-item">
            <Link to="/home" className="nav-link " aria-current="page">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#home"></use>
              </svg>
              Home
            </Link>
          </li>

          <li>
            <Link to="/bookappoinments" className="nav-link text-white">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Book Appointment
            </Link>
          </li>

          <li>
            <Link to="/myappoinments" className="nav-link text-white">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#speedometer2"></use>
              </svg>
              My Appointments
            </Link>
          </li>

          <li>
            <Link to="/medicalrecords" className="nav-link text-white">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#table"></use>
              </svg>
              Medical Records
            </Link>
          </li>

          <li>
            <Link to="/bookappoinment" className="nav-link text-white">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#speedometer2"></use>
              </svg>
              Payment
            </Link>
          </li>

          <li>
            <Link to="/profile" className="nav-link text-white">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#grid"></use>
              </svg>
              Profile
            </Link>
          </li>

          <li>
            <Link to="/" className="nav-link text-white">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#people-circle"></use>
              </svg>
              Help/[translate:Support]
            </Link>
          </li>

          <li>
            <Link to="/" className="nav-link text-white">
              <svg
                className="bi pe-none me-2"
                width="16"
                height="16"
                aria-hidden="true"
              >
                <use xlinkHref="#people-circle"></use>
              </svg>
              LogOut
            </Link>
          </li>
        </ul>

        <hr />
      </div>
    </div>
  );
};

export default Navbar;
