import React, { useState } from "react";
import bg from "../assets/fullhomebackground.png";
import { Link, useNavigate } from "react-router-dom";

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
  backgroundAttachment: "fixed",
  backgroundColor: "rgba(255, 255, 255, 0.6)",
  backgroundBlendMode: "lighten",
};

const formStyle = {
  backgroundColor: "#ffffffff",
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
  marginBottom: "8px",
  border: "1px solid #adadadff",
  borderRadius: "10px",
  outline: "none",
  fontSize: "15px",
  backgroundColor: "#ffffffff",
  color: "#000000ff",
  transition: "all 0.3s ease",
};

const errorText = {
  color: "red",
  fontSize: "12px",
  marginBottom: "8px",
};

const h5Style = {
  textAlign: "center",
  marginTop: "15px",
  color: "#000000ff",
  fontWeight: "400",
  fontSize: "14px",
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
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setServerError("");
  };

  const validate = () => {
    const newErrors = {};
    if (!form.email.trim()) newErrors.email = "Email is required";
    if (!form.password.trim()) newErrors.password = "Password is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setServerError("");

    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      const data = await res.json();

      if (!res.ok) {
        // Show server-provided message if available
        setServerError(data.error || data.details || "Login failed");
        setLoading(false);
        return;
      }

      // Success path
      // If you later add tokens, save them here (localStorage/sessionStorage)
      // e.g. localStorage.setItem('token', data.token)
      setLoading(false);
      navigate("/home");
    } catch (err) {
      console.error("Network error:", err);
      setServerError("Network error. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={formStyle}>
        <h2 style={titleStyle}>Login</h2>
        <form onSubmit={handleLogin} noValidate>
          <label htmlFor="email" style={labelStyle}>
            Email:
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.email && <div style={errorText}>{errors.email}</div>}

          <label htmlFor="password" style={labelStyle}>
            Password:
          </label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            style={inputStyle}
          />
          {errors.password && <div style={errorText}>{errors.password}</div>}

          {serverError && <div style={errorText}>{serverError}</div>}

          <button type="submit" style={buttonStyle} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <h5 style={h5Style}>
            Don't have an account <Link to={"/signin"}>signin</Link>
          </h5>
        </form>
      </div>
    </div>
  );
};

export default Login;
