import React, { useState } from "react";
import Select from "react-select";
import "./DashboardProfile.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { UseContextProvider } from "../Context/ContextProvider";

const genderOptions = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];
const timezoneOptions = [
  { value: "America/Los_Angeles", label: "(UTC-08:00) America/Los_Angeles" },
  { value: "America/New_York", label: "(UTC-05:00) America/New_York" },
  { value: "America/Sao_Paulo", label: "(UTC-03:00) America/Sao_Paulo" },
  { value: "Europe/London", label: "(UTC+00:00) Europe/London" },
  { value: "Europe/Berlin", label: "(UTC+01:00) Europe/Berlin" },
  { value: "Africa/Cairo", label: "(UTC+02:00) Africa/Cairo" },
  { value: "Asia/Riyadh", label: "(UTC+03:00) Asia/Riyadh" },
  { value: "Asia/Dubai", label: "(UTC+04:00) Asia/Dubai" },
  { value: "Asia/Kolkata", label: "(UTC+05:30) Asia/Kolkata" },
  { value: "Asia/Dhaka", label: "(UTC+06:00) Asia/Dhaka" },
  { value: "Asia/Bangkok", label: "(UTC+07:00) Asia/Bangkok" },
  { value: "Asia/Singapore", label: "(UTC+08:00) Asia/Singapore" },
  { value: "Asia/Tokyo", label: "(UTC+09:00) Asia/Tokyo" },
  { value: "Australia/Sydney", label: "(UTC+10:00) Australia/Sydney" },
  { value: "Pacific/Auckland", label: "(UTC+12:00) Pacific/Auckland" },
  { value: "Pacific/Honolulu", label: "(UTC-10:00) Pacific/Honolulu" },
  { value: "America/Denver", label: "(UTC-07:00) America/Denver" },
  { value: "America/Chicago", label: "(UTC-06:00) America/Chicago" },
  { value: "Asia/Tehran", label: "(UTC+03:30) Asia/Tehran" },
  { value: "Australia/Darwin", label: "(UTC+09:30) Australia/Darwin" },
];
const countryOptions = [
  { value: "india", label: "India" },
  // Add more countries as needed
];
const bloodGroupOptions = [
  { value: "A+", label: "A+" },
  { value: "A-", label: "A-" },
  { value: "B+", label: "B+" },
  { value: "B-", label: "B-" },
  { value: "O+", label: "O+" },
  { value: "O-", label: "O-" },
  { value: "AB+", label: "AB+" },
  { value: "AB-", label: "AB-" },
];
const languageOptions = [
  { value: "english", label: "English" },
  { value: "hindi", label: "Hindi" },
  { value: "tamil", label: "Tamil" },
  // Add more languages as needed
];

const DashboardProfile = () => {
  const { Isopen } = UseContextProvider();
  const [activeSection, setActiveSection] = useState("personal");
  const [gender, setGender] = useState(null);
  const [timezone, setTimezone] = useState(null);
  const [country, setCountry] = useState(countryOptions[0]);
  const [bloodGroup, setBloodGroup] = useState(null);
  const [language, setLanguage] = useState(null);

  return (
    <div style={{ height: "100%", backgroundColor: "#e6f3ff" }}>
      <div className="fixed-header">
        <Header />
        <Navbar />
      </div>
      <div className={`page-content${Isopen ? " sidebar-open" : ""}`}>
        <div className="accounts-page-container">
          <header className="accounts-header">
            <h1>Accounts</h1>
            <button className="save-changes-button">Save changes</button>
          </header>

          {/* Section Switch Buttons */}
          <div style={{ display: "flex", gap: "12px", marginBottom: "24px" }}>
            <button
              className={
                activeSection === "personal"
                  ? "section-switch-btn active"
                  : "section-switch-btn"
              }
              onClick={() => setActiveSection("personal")}
            >
              Personal Details
            </button>
            <button
              className={
                activeSection === "medical"
                  ? "section-switch-btn active"
                  : "section-switch-btn"
              }
              onClick={() => setActiveSection("medical")}
            >
              Medical Details
            </button>
          </div>

          {/* Conditionally Render Sections */}
          {activeSection === "personal" && (
            <>
              <div className="profile-section">
                <div className="profile-photo-area">
                  <div className="avatar-placeholder">
                    <svg viewBox="0 0 24 24" width="60" height="60" fill="#ccc">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                  <div className="photo-upload-text">
                    <input
                      type="file"
                      id="profile-picture-upload"
                      name="profile_picture"
                      accept="image/*"
                      style={{ display: "none" }}
                    />
                    <label
                      htmlFor="profile-picture-upload"
                      className="add-photo-link"
                    >
                      Add Photo
                    </label>
                  </div>
                </div>
                <div className="profile-name-field">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" value="Naven K S"  style={{marginLeft:"15px"}}/>
                </div>
              </div>
              <hr className="section-divider" />
              <div className="contact-and-personal-info">
                <div className="input-group">
                  <label htmlFor="phone-number">Phone number</label>
                  <div className="input-with-action">
                    <input type="tel" id="phone-number" value="+918122859410" />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="email-address">Email Address</label>
                  <div className="input-with-action">
                    <input type="email" id="email-address" />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="gender">Gender</label>
                  <div style={{ flex: 1 }}>
                    <Select
                      id="gender"
                      options={genderOptions}
                      value={gender}
                      onChange={setGender}
                      placeholder="Select an option"
                      isClearable
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="date-of-birth">Date of birth</label>
                  <input type="date" id="date-of-birth" />
                </div>
                <div className="input-group">
                  <label htmlFor="timezone">Timezone</label>
                  <div style={{ flex: 1 }}>
                    <Select
                      id="timezone"
                      options={timezoneOptions}
                      value={timezone}
                      onChange={setTimezone}
                      placeholder="Select timezone"
                      isClearable
                    />
                  </div>
                </div>
              </div>
              <hr className="section-divider" />
              <div className="address-section">
                <label>Address</label>
                <div className="address-fields-grid">
                  <div className="input-group">
                    <label htmlFor="house-no">
                      House No / Street Name / Area
                    </label>
                    <input type="text" id="house-no" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="colony-street">
                      Colony / Street / Locality
                    </label>
                    <input type="text" id="colony-street" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="city">City</label>
                    <input type="text" id="city" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" />
                  </div>
                  <div className="input-group">
                    <label htmlFor="country">Country*</label>
                    <div style={{ flex: 1 }}>
                      <Select
                        id="country"
                        options={countryOptions}
                        value={country}
                        onChange={setCountry}
                        placeholder="Select country"
                        isClearable
                      />
                    </div>
                  </div>
                  <div className="input-group">
                    <label htmlFor="pincode">Pincode</label>
                    <input type="text" id="pincode" />
                  </div>
                </div>
              </div>
            </>
          )}

          {activeSection === "medical" && (
            <>
              <div className="medical-info-section">
                <div className="input-group">
                  <label htmlFor="blood-group">Blood group</label>
                  <div style={{ flex: 1 }}>
                    <Select
                      id="blood-group"
                      options={bloodGroupOptions}
                      value={bloodGroup}
                      onChange={setBloodGroup}
                      placeholder="Select blood group"
                      isClearable
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="allergies">Height</label>
                  <input type="text" id="allergies" />
                </div>
                <div className="input-group">
                  <label htmlFor="chronic-diseases">Weight</label>
                  <input type="text" id="chronic-diseases" />
                </div>
                <div className="input-group">
                  <label htmlFor="medications">
                    Existing Medical Conditions
                  </label>
                  <input type="text" id="medications" />
                </div>
                <div className="input-group">
                  <label htmlFor="surgeries">Current Medications</label>
                  <input type="text" id="surgeries" />
                </div>
                <div className="input-group">
                  <label htmlFor="family-history">Allergies</label>
                  <input type="text" id="family-history" />
                </div>
                <div className="input-group">
                  <label htmlFor="language">
                    Past Surgeries / Medical History
                  </label>
                  <div style={{ flex: 1 }}>
                    <Select
                      id="language"
                      options={languageOptions}
                      value={language}
                      onChange={setLanguage}
                      placeholder="Select language"
                      isClearable
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="extra-phone-numbers">
                    Extra phone numbers
                  </label>
                  <input type="tel" id="extra-phone-numbers" />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardProfile;
