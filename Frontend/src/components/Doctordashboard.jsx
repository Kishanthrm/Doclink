import React, { useState } from "react";
import Doctorheader from "./Doctorheader";
import "./Doctordashboard.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CiClock2 } from "react-icons/ci";
import { IoLanguage } from "react-icons/io5";
import { MdVerified } from "react-icons/md";
import doctorImage from "../assets/Doctor.png";
import { useNavigate } from "react-router-dom";
const IconUsers = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const IconClock = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const Doctordashboard = () => {
  const navigate=useNavigate();
  const totalPatientsAttended = 24;
  const patientsWaitingToday = [
    { id: 1, name: "John Doe", age: 32, time: "10:30 AM" },
    { id: 2, name: "Priya Sharma", age: 27, time: "10:45 AM" },
    { id: 3, name: "Ravi Kumar", age: 40, time: "11:00 AM" },
    { id: 4, name: "Sneha Patel", age: 35, time: "11:15 AM" },
    { id: 5, name: "Arjun Mehta", age: 29, time: "11:30 AM" },
  ];

  const [schedule, setSchedule] = useState({
    Monday: { start: "10:00", end: "16:00", holiday: false },
    Tuesday: { start: "10:00", end: "16:00", holiday: false },
    Wednesday: { start: "10:00", end: "16:00", holiday: false },
    Thursday: { start: "10:00", end: "16:00", holiday: false },
    Friday: { start: "10:00", end: "16:00", holiday: false },
    Saturday: { start: "10:00", end: "14:00", holiday: false },
    Sunday: { start: "", end: "", holiday: true },
  });

  const handleTimeChange = (day, field, value) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: { ...prev[day], [field]: value },
    }));
  };

  const handleHolidayToggle = (day) => {
    setSchedule((prev) => ({
      ...prev,
      [day]: { ...prev[day], holiday: !prev[day].holiday },
    }));
  };

  return (
    <div className="doctor-dashboard">
      <Doctorheader />

      <div className="doctor-main">
        {/* Doctor Info */}
        <div className="doctor-card">
          <div className="doctor-left">
            <img src={doctorImage} alt="Doctor" className="doctor-photo" />
          </div>

          <div className="doctor-right">
            <h2 className="doctor-name">Dr J M Dua</h2>
            <p className="doctor-specialty">
              MDS - Orthodontics and Dentofacial Orthopaedics, BDS
            </p>
            <p className="doctor-role">
              Dentist, Cosmetic/Aesthetic Dentist, Dentofacial Orthopedist,
              Orthodontist
            </p>
            <p className="doctor-experience">
              15 Years Experience Overall (14 years as specialist)
            </p>
            <p className="doctor-verification">
              <MdVerified className="verified-icon" />
              Medical Registration Verified
            </p>

            <hr className="divider" />

            <div className="doctor-info">
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
        </div>

        {/* Stats */}
        <div className="doctor-stats">
          <div className="stat-card">
            <IconUsers className="stat-icon" />
            <div className="stat-text">
              <p className="stat-label">Patients Attended</p>
              <h4 className="stat-value">{totalPatientsAttended}</h4>
            </div>
          </div>

          <div className="stat-card">
            <IconClock className="stat-icon" />
            <div className="stat-text">
              <p className="stat-label">Waiting Today</p>
              <h4 className="stat-value">{patientsWaitingToday.length}</h4>
            </div>
          </div>
        </div>

        {/* Patients Waiting Today */}
        <div className="patients-section mt-4">
          <h4 className="section-title">Patients Waiting Today</h4>
          <div className="patients-list">
            {patientsWaitingToday.map((p) => (
              <div key={p.id} className="patient-card">
                <div>
                  <h6>{p.name}</h6>
                  <p>
                    Age: {p.age} | Time: <strong>{p.time}</strong>
                  </p>
                </div>
                <button className="btn btn-primary btn-sm" onClick={()=>{
                    navigate('/patientdetails');
                }}>More Details</button>
              </div>
            ))}
          </div>
        </div>

        {/* Doctor Availability Schedule */}
        <div className="schedule-section mt-4">
          <h4 className="section-title">Doctor Availability Schedule</h4>
          <div className="schedule-table">
            {Object.keys(schedule).map((day) => (
              <div key={day} className="schedule-row">
                <div className="day-col">
                  <span className="day-name">{day}</span>
                </div>

                <div className="time-col">
                  <label className="holiday-toggle">
                    <input
                      type="checkbox"
                      checked={schedule[day].holiday}
                      onChange={() => handleHolidayToggle(day)}
                    />
                    <span>Holiday</span>
                  </label>

                  {schedule[day].holiday ? (
                    <span className="holiday">Holiday</span>
                  ) : (
                    <div className="time-group">
                      <input
                        type="time"
                        value={schedule[day].start}
                        onChange={(e) =>
                          handleTimeChange(day, "start", e.target.value)
                        }
                        className="time-input"
                      />
                      <span className="time-separator">to</span>
                      <input
                        type="time"
                        value={schedule[day].end}
                        onChange={(e) =>
                          handleTimeChange(day, "end", e.target.value)
                        }
                        className="time-input"
                      />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctordashboard;
