import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function DoctorSignin() {
  const [formData, setFormData] = useState({
    // Basic Info
    fullName: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
    address: "",
    password: "",

    // Professional Info
    registrationNumber: "",
    licensingAuthority: "",
    qualification: "",
    specialization: "",
    experience: "",
    languages: "",
    bio: "",

    // New Sections
    services: "",
    specializations: "",
    awards: "",
    education: "",
    memberships: "",
    registrations: "",

    // Documents
    idProof: null,
    registrationCertificate: null,
    degreeCertificate: null,
    profilePhoto: null,
  });

  const [errors, setErrors] = useState({});

  // Handle text and select inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file inputs
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  // Validate mandatory fields
  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "fullName",
      "email",
      "phone",
      "registrationNumber",
      "licensingAuthority",
      "qualification",
      "languages",
      "specialization",
      "experience",
      "bio",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]) newErrors[field] = "This field is required";
    });

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      return true; // ✅ No errors found    } else {
      return false; // ❌ There are some errors
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const payload = {
      full_name: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      gender: formData.gender,
      dob: formData.dob,
      address: formData.address,
      password: formData.password,

      registration_number: formData.registrationNumber,
      licensing_authority: formData.licensingAuthority,
      qualification: formData.qualification,
      specialization: formData.specialization,
      experience: Number(formData.experience) || null,
      languages: formData.languages,
      bio: formData.bio,

      services: formData.services,
      specializations: formData.specializations,
      awards: formData.awards,
      education: formData.education,
      memberships: formData.memberships,
      registrations: formData.registrations,
    };

    try {
      const res = await fetch("http://localhost:5000/doctorsignin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        alert("Registration failed: " + (data.details || data.error));
        return;
      }

      alert("Registration successful!");
    } catch (err) {
      console.error("Network error:", err);
      alert("Network error, please try again.");
    }
  };

  return (
    <div className="container my-5 p-4 border rounded bg-white shadow">
      <h2 className="text-center mb-4">Doctor Registration Form</h2>

      <form onSubmit={handleSubmit}>
        {/* ---------- Basic Info ---------- */}
        <h5>Basic Information</h5>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Full Name *</label>
            <input
              type="text"
              name="fullName"
              className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
              value={formData.fullName}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.fullName}</div>
          </div>

          <div className="col-md-6 mb-3">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              value={formData.email}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.email}</div>
          </div>

          <div className="col-md-6 mb-3">
            <label>Phone *</label>
            <input
              type="text"
              name="phone"
              className={`form-control ${errors.phone ? "is-invalid" : ""}`}
              value={formData.phone}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.phone}</div>
          </div>

          <div className="col-md-6 mb-3">
            <label>Gender</label>
            <select
              name="gender"
              className="form-control"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          <div className="col-md-6 mb-3">
            <label>Date of Birth</label>
            <input
              type="date"
              name="dob"
              className="form-control"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 mb-3">
            <label>Address</label>
            <input
              type="text"
              name="address"
              className="form-control"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* ---------- Professional Info ---------- */}
        <h5 className="mt-4">Professional Information</h5>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>Registration Number *</label>
            <input
              type="text"
              name="registrationNumber"
              className={`form-control ${
                errors.registrationNumber ? "is-invalid" : ""
              }`}
              value={formData.registrationNumber}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.registrationNumber}</div>
          </div>

          <div className="col-md-6 mb-3">
            <label>Licensing Authority *</label>
            <input
              type="text"
              name="licensingAuthority"
              className={`form-control ${
                errors.licensingAuthority ? "is-invalid" : ""
              }`}
              value={formData.licensingAuthority}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.licensingAuthority}</div>
          </div>

          <div className="col-md-6 mb-3">
            <label>Qualification *</label>
            <input
              type="text"
              name="qualification"
              className={`form-control ${
                errors.qualification ? "is-invalid" : ""
              }`}
              value={formData.qualification}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.qualification}</div>
          </div>

          <div className="col-md-6 mb-3">
            <label>Specialization *</label>
            <input
              type="text"
              name="specialization"
              className={`form-control ${
                errors.specialization ? "is-invalid" : ""
              }`}
              value={formData.specialization}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.specialization}</div>
          </div>

          <div className="col-md-6 mb-3">
            <label>Years of Experience *</label>
            <input
              type="number"
              name="experience"
              className={`form-control ${
                errors.experience ? "is-invalid" : ""
              }`}
              value={formData.experience}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.experience}</div>
          </div>

          <div className="col-md-6 mb-3">
            <label>Languages Spoken *</label>
            <input
              type="text"
              name="languages"
              className={`form-control ${errors.languages ? "is-invalid" : ""}`}
              value={formData.languages}
              onChange={handleChange}
            />
            <div className="invalid-feedback">{errors.languages}</div>
          </div>

          <div className="col-12 mb-3">
            <label>Short Bio *</label>
            <textarea
              name="bio"
              className={`form-control ${errors.bio ? "is-invalid" : ""}`}
              value={formData.bio}
              onChange={handleChange}
              rows="3"
            />
            <div className="invalid-feedback">{errors.bio}</div>
          </div>
        </div>

        {/* ---------- New Sections ---------- */}
        <h5 className="mt-4">Additional Details</h5>
        <div className="mb-3">
          <label>Services</label>
          <textarea
            name="services"
            className="form-control"
            value={formData.services}
            onChange={handleChange}
            rows="2"
          />
        </div>
        <div className="mb-3">
          <label>Specializations</label>
          <textarea
            name="specializations"
            className="form-control"
            value={formData.specializations}
            onChange={handleChange}
            rows="2"
          />
        </div>
        <div className="mb-3">
          <label>Awards & Recognitions</label>
          <textarea
            name="awards"
            className="form-control"
            value={formData.awards}
            onChange={handleChange}
            rows="2"
          />
        </div>
        <div className="mb-3">
          <label>Education</label>
          <textarea
            name="education"
            className="form-control"
            value={formData.education}
            onChange={handleChange}
            rows="2"
          />
        </div>
        <div className="mb-3">
          <label>Memberships</label>
          <textarea
            name="memberships"
            className="form-control"
            value={formData.memberships}
            onChange={handleChange}
            rows="2"
          />
        </div>
        <div className="mb-3">
          <label>Registrations</label>
          <textarea
            name="registrations"
            className="form-control"
            value={formData.registrations}
            onChange={handleChange}
            rows="2"
          />
        </div>

        {/* ---------- Document Uploads ---------- */}
        <h5 className="mt-4">Upload Documents (Mandatory)</h5>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label>ID Proof *</label>
            <input
              type="file"
              name="idProof"
              className={`form-control ${errors.idProof ? "is-invalid" : ""}`}
              onChange={handleFileChange}
            />
            <div className="invalid-feedback">{errors.idProof}</div>
          </div>

          <div className="col-md-6 mb-3">
            <label>Registration Certificate *</label>
            <input
              type="file"
              name="registrationCertificate"
              className={`form-control ${
                errors.registrationCertificate ? "is-invalid" : ""
              }`}
              onChange={handleFileChange}
            />
            <div className="invalid-feedback">
              {errors.registrationCertificate}
            </div>
          </div>

          <div className="col-md-6 mb-3">
            <label>Degree Certificate *</label>
            <input
              type="file"
              name="degreeCertificate"
              className={`form-control ${
                errors.degreeCertificate ? "is-invalid" : ""
              }`}
              onChange={handleFileChange}
            />
            <div className="invalid-feedback">{errors.degreeCertificate}</div>
          </div>

          <div className="col-md-6 mb-3">
            <label>Profile Photo *</label>
            <input
              type="file"
              name="profilePhoto"
              className={`form-control ${
                errors.profilePhoto ? "is-invalid" : ""
              }`}
              onChange={handleFileChange}
            />
            <div className="invalid-feedback">{errors.profilePhoto}</div>
          </div>
        </div>

        {/* ---------- Submit Button ---------- */}
        <div className="text-center mt-4">
          <button type="submit" className="btn btn-primary px-4">
            Submit Registration
          </button>
        </div>
      </form>
    </div>
  );
}
