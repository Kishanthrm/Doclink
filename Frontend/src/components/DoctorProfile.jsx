import React, { useState } from "react";
import "./DoctorProfile.css";
import { IoShareOutline, IoLanguage, IoLocationOutline } from "react-icons/io5";
import { CiClock2 } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import doctorImage from "../assets/Doctor.png";
import { useMemo } from "react";
import { FaHome, FaStar } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import { UseContextProvider } from "../Context/ContextProvider";

const generateDateTabs = (numDays) => {
  const tabs = [];
  const today = new Date();
  const dayFormatter = new Intl.DateTimeFormat("en-US", { weekday: "short" });
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "short",
  });

  for (let i = 0; i < numDays; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);

    let label = "";
    if (i === 0) {
      label = "Today";
    } else if (i === 1) {
      label = "Tomorrow";
    } else {
      label = `${dayFormatter.format(date)}, ${dateFormatter.format(date)}`;
    }

    tabs.push({
      id: i,
      label: label,
      // Dummy data for slots
      slotsAvailable: i === 0 ? 7 : 14,
      timeSlots: [
        "04:30 PM",
        "05:00 PM",
        "05:30 PM",
        "06:00 PM",
        "06:30 PM",
        "07:00 PM",
        "07:30 PM",
      ],
    });
  }
  return tabs;
};
const DoctorProfile = () => {
  const { Isopen } = UseContextProvider();
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  // State to manage which day and time are selected
  const [selectedDayId, setSelectedDayId] = useState(0);
  const [selectedTime, setSelectedTime] = useState(null);

  // Generate date tabs for the next 7 days
  const dateTabs = useMemo(() => generateDateTabs(7), []);

  const activeDayData = dateTabs.find((day) => day.id === selectedDayId);

  return (
    <div
      className="profile-page-container"
      style={{
        padding: 0,
      }}
    >
      <div
        style={{
          backgroundColor: "#d7ebffff",
          width: "100%",
          borderRadius: "50px",
          marginTop: "50px",
          marginLeft: "30px",
          marginRight: "30px",
        }}
      >
        <div className="main-content">
          <div className="left-panel">
            <div className="doctor-image-container">
              <img
                src={doctorImage}
                alt="Dr J M Dua"
                className="doctor-photo"
              />
            </div>
            <div className="doctor-details">
              <h1>Dr J M Dua</h1>
              <p className="specialty">
                MDS - Orthodontics and Dentofacial Orthopaedics, BDS
              </p>
              <p className="experience">
                Dentist,Cosmetic/Aesthetic Dentist,Dentofacial
                Orthopedist,Orthodontist
              </p>
              <p className="qualifications">
                15 Years Experience Overall (14 years as specialist)
              </p>
              <p>
                <MdVerified
                  style={{
                    color: "green",
                    height: "25px",
                    width: "25px",
                    marginRight: "10px",
                  }}
                />
                Medical Registration Verified
              </p>
              <hr className="divider" />

              <div className="info-row">
                <CiClock2 className="icon" />
                <span>15:00 - 15:15 • Mon - Sat</span>
              </div>
              <div className="info-row">
                <IoLanguage className="icon" />
                <span>English • Hindi • Punjabi</span>
              </div>
            </div>
          </div>

          {/* Right Panel: Appointment Form */}
          <div className="right-panel">
            <div className="scheduler-container">
              {/* Header Section */}
              <div className="scheduler-header">
                <div className="header-title">
                  <span className="home-icon-wrapper">
                    <FaHome />
                  </span>
                  Appointment
                </div>
                <div className="header-fee">₹ 300 fee</div>
              </div>

              <div className="scheduler-body">
                {/* Clinic Info Section */}
                {/* Date Tabs Section */}
                <div className="date-selector">
                  <IoChevronBack className="nav-arrow" />
                  <div className="date-tabs">
                    {dateTabs.slice(0, 3).map((tab) => (
                      <div
                        key={tab.id}
                        className={`date-tab ${
                          tab.id === selectedDayId ? "active" : ""
                        }`}
                        onClick={() => setSelectedDayId(tab.id)}
                      >
                        <p className="tab-day">{tab.label}</p>
                        <p className="tab-slots">
                          {tab.slotsAvailable} Slots Available
                        </p>
                      </div>
                    ))}
                  </div>
                  <IoChevronForward className="nav-arrow" />
                </div>

                {/* Time Slots Section */}
                <div className="time-slots">
                  <h3 className="slots-heading">
                    Evening{" "}
                    <span>({activeDayData.timeSlots.length} slots)</span>
                  </h3>
                  <div className="slots-grid">
                    {activeDayData.timeSlots.map((time) => (
                      <button
                        key={time}
                        className={`time-slot-btn ${
                          selectedTime === time ? "selected" : ""
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
