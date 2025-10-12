import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import "./MedicalRecords.css";

// Placeholder component for existing records view
const ExistingRecordsList = () => (
  <div className="existing-records-list">
    <h2>Existing Medical Documents</h2>
    <ul>
      <li>Consultation Summary (2023-10-01)</li>
      <li>Lab Results - Bloodwork (2024-03-15)</li>
      <li>X-Ray Scan (2024-05-20)</li>
    </ul>
  </div>
);

const MedicalRecords = () => {
  const [activeView, setActiveView] = useState("add");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) setSelectedFile(file);
    event.target.value = null; // reset input
  };

  const handleRemoveFile = () => setSelectedFile(null);

  const handleSave = () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }
    const formData = new FormData();
    formData.append("medicalRecord", selectedFile);

    console.log("Simulating file upload for:", selectedFile.name);
    alert(`Simulating save for: ${selectedFile.name}`);

    setSelectedFile(null);
  };

  const getButtonClass = (viewName) =>
    `action-button ${activeView === viewName ? "active-button" : ""}`;

  return (
    <div className="page-layout">
      <Header />
      <Navbar />

      <div className="main-content-wrapper">
        <div className="medcontainer">
          <div className="filecontainer">
            {/* Buttons to toggle between views */}
            <div className="button-container">
              <button
                className={getButtonClass("add")}
                onClick={() => setActiveView("add")}
              >
                Add
              </button>
              <div className="separator"></div>
              <button
                className={getButtonClass("existing")}
                onClick={() => setActiveView("existing")}
              >
                Existing
              </button>
            </div>

            {/* Add View */}
            {activeView === "add" && (
              <div className="file-input-area">
                {!selectedFile && (
                  <>
                    <label htmlFor="file-upload" className="file-input-label">
                      📁 Choose a File
                    </label>
                    <span className="drop-zone-text">
                      or drag and drop your medical record here
                    </span>
                  </>
                )}

                <input id="file-upload" type="file" onChange={handleFileChange} />

                {selectedFile && (
                  <div className="file-info-container">
                    <div className="file-name-wrapper">
                      <span className="file-name-text">
                        {selectedFile.name}
                      </span>
                      <button
                        onClick={handleRemoveFile}
                        className="remove-file-btn"
                        title="Remove file"
                      >
                        &times;
                      </button>
                    </div>
                    <button onClick={handleSave} className="save-button">
                      Save File
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Existing View */}
            {activeView === "existing" && <ExistingRecordsList />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecords;
