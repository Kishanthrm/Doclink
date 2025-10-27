import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Header = () => {
  return (
    <div>
      <header className="header-container">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-decoration-none header-logo"
            >
              <span className="logo-text">DocLink</span>
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="/bookappoinments" className="nav-link">
                  Appointments
                </a>
              </li>
              <li>
                <a href="/medicalrecords" className="nav-link">
                  Medication-Follow-ups
                </a>
              </li>
              <li>
                <a href="/" className="nav-link ">
                  AI Support
                </a>
              </li>
              <li>
                <a href="/profile" className="nav-link">
                  Profile
                </a>
              </li>
            </ul>

            <div className="dropdown text-end">
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
