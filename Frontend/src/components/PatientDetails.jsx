import React from "react";
import "./PatientDetails.css";
import { Modal, Button } from "react-bootstrap";
import Doctorheader from "./Doctorheader";

export default function PatientDetails() {
  const patient = {
    id: 1,
    name: "Ravi Kumar",
    age: 34,
    gender: "Male",
    phone: "+91 98765 43210",
    email: "ravi.kumar@example.com",
    address: "12, MG Road, Bengaluru, Karnataka, India",

    appointmentDate: "2025-11-03",
    time: "10:30 AM",
    consultationType: "In-Person",
    status: "Waiting",

    reason: "Severe toothache in lower right molar region",
    allergies: "Penicillin",
    medications: "Paracetamol 500mg (Twice a day)",
    medicalHistory: "Diabetic (Type 2) for 3 years",
    familyHistory: "Father has hypertension",

    reports: [
      {
        name: "Dental X-Ray - Oct 2025",
        url: "https://example.com/reports/dental-xray-oct2025.pdf",
      },
      {
        name: "Blood Sugar Report",
        url: "https://example.com/reports/blood-sugar.pdf",
      },
    ],
  };

  return (
    <div>
      <Doctorheader/>
      <div className="patient-modal-page">
        <div className="modal-dialog modal-lg patient-modal" role="document">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h5 className="modal-title">Patient Details</h5>
            </div>

            <div className="modal-body">
              <div className="patient-details-container">
                {/* Personal Information */}
                <div className="patient-section">
                  <h5>👤 Personal Information</h5>
                  <div className="patient-info-grid">
                    <p>
                      <strong>Name:</strong> {patient.name}
                    </p>
                    <p>
                      <strong>Age:</strong> {patient.age}
                    </p>
                    <p>
                      <strong>Gender:</strong> {patient.gender}
                    </p>
                    <p>
                      <strong>Contact:</strong> {patient.phone}
                    </p>
                    <p>
                      <strong>Email:</strong> {patient.email}
                    </p>
                    <p>
                      <strong>Address:</strong> {patient.address}
                    </p>
                  </div>
                </div>

                {/* Appointment Details */}
                <div className="patient-section">
                  <h5>📅 Appointment Details</h5>
                  <div className="patient-info-grid">
                    <p>
                      <strong>Date:</strong> {patient.appointmentDate}
                    </p>
                    <p>
                      <strong>Time:</strong> {patient.time}
                    </p>
                    <p>
                      <strong>Type:</strong> {patient.consultationType}
                    </p>
                    <p>
                      <strong>Status:</strong> {patient.status}
                    </p>
                  </div>
                </div>

                {/* Medical Info */}
                <div className="patient-section">
                  <h5>🩺 Medical Information</h5>
                  <div className="patient-info-grid">
                    <p>
                      <strong>Reason for Visit:</strong> {patient.reason}
                    </p>
                    <p>
                      <strong>Allergies:</strong> {patient.allergies}
                    </p>
                    <p>
                      <strong>Current Medications:</strong>{" "}
                      {patient.medications}
                    </p>
                    <p>
                      <strong>Medical History:</strong> {patient.medicalHistory}
                    </p>
                    <p>
                      <strong>Family History:</strong> {patient.familyHistory}
                    </p>
                  </div>
                </div>

                {/* Uploaded Reports */}
                {patient.reports && (
                  <div className="patient-section">
                    <h5>📁 Uploaded Reports</h5>
                    <ul>
                      {patient.reports.map((report, index) => (
                        <li key={index}>
                          <a
                            href={report.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {report.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="modal-footer">
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Start Consultation</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
