import React, { useState } from "react";
import bg from "../assets/fullhomebackground.png";
const containerStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  fontFamily: "'Arial', sans-serif",
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

// Form style
const formStyle = {
  backgroundColor: "#ffffffff", // Dark form background
  padding: "35px 40px",
  borderRadius: "15px",
  boxShadow: "0px 8px 30px rgba(209, 204, 204, 0.5)",
  width: "400px",
  maxWidth: "100%",
  transition: "all 0.3s ease",
};

const titleStyle = {
  textAlign: "center",
  marginBottom: "25px",
  color: "#000000ff",
  fontSize: "24px",
};

const labelStyle = {
  display: "block",
  margin: "10px 0 5px",
  fontWeight: "600",
  color: "#000000ff",
};

const inputStyle = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  border: "1px solid #adadadff",
  borderRadius: "10px",
  outline: "none",
  fontSize: "15px",
  backgroundColor: "#ffffffff",
  color: "#000000ff",
  transition: "all 0.3s ease",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  backgroundColor: "#000000ff",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
  transition: "background 0.3s ease, transform 0.2s ease",
};
const Login = () => {
  const [step, setStep] = useState(1);

  // Container style

  const handleLogin = (e) => {
    e.preventDefault();
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={titleStyle}>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email" style={labelStyle}>
            Email:
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            style={inputStyle}
          />

          <label htmlFor="password" style={labelStyle}>
            Password:
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            style={inputStyle}
          />

          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
