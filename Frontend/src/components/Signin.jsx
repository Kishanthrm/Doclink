import React, { useState } from "react";
import bg from "../assets/fullhomebackground.png";
const Signin = () => {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    fullName: "",
    age: "",
    dob: "",
    gender: "",
    contactNumber: "",
    email: "",
    password: "",
    bloodGroup: "",
    height: "",
    weight: "",
    medicalCondition: "",
    currentMedication: "",
    allergies: "",
    medicalHistory: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    let { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const validateStep = (fields) => {
    let newErrors = {};
    fields.forEach((field) => {
      if (!user[field]?.trim()) {
        newErrors[field] = "Please fill this field";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    const step1Fields = [
      "fullName",
      "age",
      "dob",
      "gender",
      "contactNumber",
      "email",
      "password",
    ];
    if (validateStep(step1Fields)) setStep(2);  
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const step2Fields = [
      "bloodGroup",
      "height",
      "weight",
      "medicalCondition",
      "currentMedication",
      "allergies",
      "medicalHistory",
    ];
    if (validateStep(step2Fields)) {
      console.log("Form submitted:", user);
      alert("Form submitted successfully!");
    }
  };

  // Inline Styles
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#fff",
    padding: "10px",
    backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",

    backgroundColor: "rgba(255, 255, 255, 0.6)",
    backgroundBlendMode: "lighten",
  };

  const formStyle = {
    backgroundColor: "#fff",
    padding: "35px 40px",
    borderRadius: "15px",
    boxShadow: "0px 8px 30px rgba(209, 204, 204, 0.5)",
    width: "400px",
    maxWidth: "100%",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "25px",
    color: "#000",
    fontSize: "24px",
  };

  const labelStyle = {
    display: "block",
    margin: "10px 0 5px",
    fontWeight: "600",
    color: "#000",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    marginBottom: "10px",
    border: "1px solid #adadad",
    borderRadius: "10px",
    outline: "none",
    fontSize: "15px",
    backgroundColor: "#fff",
    color: "#000",
  };

  const selectStyle = { ...inputStyle, cursor: "pointer" };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    backgroundColor: "#000",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "10px",
  };

  const errorStyle = {
    color: "red",
    fontSize: "12px",
    marginTop: "-5px",
    marginBottom: "10px",
    display: "block",
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        {step === 1 && (
          <form onSubmit={handleNext}>
            <h2 style={titleStyle}>Registration Details</h2>

            <label style={labelStyle}>Full Name:</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={user.fullName}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.fullName && (
              <span style={errorStyle}>{errors.fullName}</span>
            )}

            <label style={labelStyle}>Age:</label>
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={user.age}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.age && <span style={errorStyle}>{errors.age}</span>}

            <label style={labelStyle}>Date of Birth:</label>
            <input
              type="date"
              name="dob"
              value={user.dob}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.dob && <span style={errorStyle}>{errors.dob}</span>}

            <label style={labelStyle}>Gender:</label>
            <select
              name="gender"
              value={user.gender}
              onChange={handleChange}
              style={selectStyle}
            >
              <option value="">Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <span style={errorStyle}>{errors.gender}</span>}

            <label style={labelStyle}>Contact Number:</label>
            <input
              type="text"
              name="contactNumber"
              placeholder="Enter your contact number"
              value={user.contactNumber}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.contactNumber && (
              <span style={errorStyle}>{errors.contactNumber}</span>
            )}

            <label style={labelStyle}>Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.email && <span style={errorStyle}>{errors.email}</span>}

            <label style={labelStyle}>Password:</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.password && (
              <span style={errorStyle}>{errors.password}</span>
            )}

            <button type="submit" style={buttonStyle}>
              Next
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit}>
            <h2 style={titleStyle}>Medical Profile</h2>

            <label style={labelStyle}>Blood Group:</label>
            <input
              type="text"
              name="bloodGroup"
              placeholder="e.g., A+, O-"
              value={user.bloodGroup}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.bloodGroup && (
              <span style={errorStyle}>{errors.bloodGroup}</span>
            )}

            <label style={labelStyle}>Height (cm):</label>
            <input
              type="number"
              name="height"
              placeholder="Enter your height in cm"
              value={user.height}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.height && <span style={errorStyle}>{errors.height}</span>}

            <label style={labelStyle}>Weight (kg):</label>
            <input
              type="number"
              name="weight"
              placeholder="Enter your weight in kg"
              value={user.weight}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.weight && <span style={errorStyle}>{errors.weight}</span>}

            <label style={labelStyle}>Existing Medical Conditions:</label>
            <input
              type="text"
              name="medicalCondition"
              placeholder="e.g., Diabetes, Hypertension"
              value={user.medicalCondition}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.medicalCondition && (
              <span style={errorStyle}>{errors.medicalCondition}</span>
            )}

            <label style={labelStyle}>Current Medications:</label>
            <input
              type="text"
              name="currentMedication"
              placeholder="Enter current medications (if any)"
              value={user.currentMedication}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.currentMedication && (
              <span style={errorStyle}>{errors.currentMedication}</span>
            )}

            <label style={labelStyle}>Allergies:</label>
            <input
              type="text"
              name="allergies"
              placeholder="Drug / Food / Environmental"
              value={user.allergies}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.allergies && (
              <span style={errorStyle}>{errors.allergies}</span>
            )}

            <label style={labelStyle}>Past Surgeries / Medical History:</label>
            <input
              type="text"
              name="medicalHistory"
              placeholder="Optional"
              value={user.medicalHistory}
              onChange={handleChange}
              style={inputStyle}
            />
            {errors.medicalHistory && (
              <span style={errorStyle}>{errors.medicalHistory}</span>
            )}

            <button type="submit" style={buttonStyle}>
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Signin;
