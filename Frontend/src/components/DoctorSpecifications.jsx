import React from "react";
import "./DoctorSpecifications.css";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from './Footer'
import { UseContextProvider } from "../Context/ContextProvider";
import DoctorProfile from "./DoctorProfile";

const DoctorSpecifications = () => {
  const questionsAndAnswers = [
    {
      q: "Where does Dr. Sree Cumar practice?",
      a: (
        <>
          Dr. Sree Cumar practices at **Arasu Dental Care - R.S. Puram**. The
          doctor also provides <a href="#">online video consultation</a> through
          Practo.
        </>
      ),
    },
    {
      q: "How can I take Dr. Sree Cumar's appointment?",
      a: (
        <>
          You can take <a href="#">Dr. Sree Cumar's appointment</a> online
          through Practo for in-clinic visit or for video consultation with the
          doctor.
        </>
      ),
    },
    {
      q: "Why do patients visit Dr. Sree Cumar?",
      a: (
        <>
          Patients frequently visit Dr. Sree Cumar for **Tooth Extraction,
          Zirconia Crowns, Dental Fillings**. To see more reasons visit the{" "}
          <a href="#">doctor's profile</a> on Practo.
        </>
      ),
    },
    {
      q: "What do patients say about Dr. Sree Cumar?",
      a: (
        <>
          Dr. Sree Cumar has been recommended by **41 patients** and has
          received stories from **30 patients**. You can{" "}
          <a href="#">read detailed patient stories</a> of the doctor on Practo.
        </>
      ),
    },
    {
      q: "What is Dr. Sree Cumar's education qualification?",
      a: (
        <>
          Dr. Sree Cumar has the following qualifications - **MDS - Orthodontics
          and Dentofacial Orthopaedics, BDS**. You can{" "}
          <a href="#">book the doctor</a> through the doctor's profile on
          Practo.
        </>
      ),
    },
  ];
  const data = {
    services: [
      "Tooth Extraction",
      "Zirconia Crowns",
      "Dental Fillings",
      "Ceramic Veneers / Crowns",
      "Aligners",
      "Bone graft",
      "Dental Surgeon",
    ],
    specializations: [
      "Dentist",
      "Cosmetic/Aesthetic Dentist",
      "Dentofacial Orthopedist",
      "Orthodontist",
    ],
    awards: [
      "Best PG Student (Orthodontics) - Guident Awards - 2016",
      "Best PG Student - Indian Health Professional Awards - 2016",
      "Best Interdisciplinary Dentist Award - Indian Health Professional Awards - 2017",
    ],
    education: [
      {
        degree: "MDS - Orthodontics and Dentofacial Orthopaedics",
        institution: "A.B. Shetty Memorial Institute of Dental Sciences, 2017",
      },
      {
        degree: "BDS",
        institution: "Sri Ramakrishna Dental College Hospital, 2010",
      },
    ],
    memberships: [
      "Indian Dental Association",
      "Indian Orthodontic Society",
      "Pierre Fauchard Academy",
      "Fellow, World Federation of Orthodontists",
    ],
    registrations: ["13724 Tamil Nadu State Dental Council, 2010"],
  };

  const renderList = (items) => (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
  const { Isopen } = UseContextProvider();
  return (
    <div
      style={{
        backgroundColor: "#e6f3ff",
        minHeight: "100vh",
      }}
    >
      <div className="fixed-header">
        <Header />
        <Navbar />
      </div>
      <div className={`page-content${Isopen ? " sidebar-open" : ""}`}>
        <DoctorProfile isSidebarOpen={Isopen} />

        {/* Patients Story */}
        <div className="PatientStories">
          <h2>Patients Stories</h2>
          <div class="patient-story-card">
            <div class="story-header">
              <div class="user-info">
                <div class="user-initial">R</div>
                <div class="user-details">
                  <span class="user-name">Roopali shankaran</span>
                  <span class="verified-text">(Verified)</span>
                </div>
              </div>
              <div class="story-timestamp">4 years ago</div>
            </div>

            <div class="story-body">
              <h3 class="visit-reason">Visited For Jaw Ache</h3>

              <div class="recommendation">
                <span class="thumb-icon">👍</span>
                <span>I recommend the doctor</span>
              </div>

              <div class="satisfaction-section">
                <span class="happy-with-text">Happy with:</span>
                <div class="tags-container">
                  <span class="tag">Doctor friendliness</span>
                  <span class="tag">Explanation of the health issue</span>
                  <span class="tag">Treatment satisfaction</span>
                </div>
              </div>

              <p class="review-text">
                I had gone for treatment of jaw ache it was very painful i can't
                tolerate the pain i can't even open my mouth also but after 1st
                sitting itself i had seen a change in my pain now, i went 2 to 3
                sittings it was completely curable with the treatment, Really
                Doctor was very friendly and explain detailed about the health
                issues i was very satisfied with the treatment given by Dr. Sree
                cumar at Arasu Dental Thankyou very much .
              </p>
            </div>
          </div>
          <div class="patient-story-card">
            <div class="story-header">
              <div class="user-info">
                <div class="user-initial">R</div>
                <div class="user-details">
                  <span class="user-name">Roopali shankaran</span>
                  <span class="verified-text">(Verified)</span>
                </div>
              </div>
              <div class="story-timestamp">4 years ago</div>
            </div>

            <div class="story-body">
              <h3 class="visit-reason">Visited For Jaw Ache</h3>

              <div class="recommendation">
                <span class="thumb-icon">👍</span>
                <span>I recommend the doctor</span>
              </div>

              <div class="satisfaction-section">
                <span class="happy-with-text">Happy with:</span>
                <div class="tags-container">
                  <span class="tag">Doctor friendliness</span>
                  <span class="tag">Explanation of the health issue</span>
                  <span class="tag">Treatment satisfaction</span>
                </div>
              </div>

              <p class="review-text">
                I had gone for treatment of jaw ache it was very painful i can't
                tolerate the pain i can't even open my mouth also but after 1st
                sitting itself i had seen a change in my pain now, i went 2 to 3
                sittings it was completely curable with the treatment, Really
                Doctor was very friendly and explain detailed about the health
                issues i was very satisfied with the treatment given by Dr. Sree
                cumar at Arasu Dental Thankyou very much .
              </p>
            </div>
          </div>
        </div>

        {/* DoctorQnA */}
        <div className="doctor-qna-container">
          <h2>Common questions & answers</h2>

          {questionsAndAnswers.map((item, index) => (
            <div key={index} className="qna-item">
              {/* Question */}
              <p className="qna-question">
                <strong>Q:</strong> {item.q}
              </p>

              {/* Answer */}
              <p className="qna-answer">
                <strong>A:</strong> {item.a}
              </p>
            </div>
          ))}

          {/* Note: I've replaced the actual URLs with '#' placeholders. 
          In a real application, these would be proper links. */}
        </div>

        {/* Doctor Profile Details */}
        <div className="doctor-profile-details" style={{border:" 1px solid #e0e0e0"}}>
          {/* 1. Services */}
          <section className="profile-section services-section">
            <h3>Services</h3>
            <div className="list-container">
              {/* Rendering the list of services in multiple columns for a compact view */}
              {renderList(data.services.slice(0, 3))}
              {renderList(data.services.slice(3, 5))}
              {renderList(data.services.slice(5))}
            </div>
          </section>

          {/* 2. Specializations and Awards - Side-by-Side */}
          <div className="two-column-row">
            <section className="profile-section specialization-section">
              <h3>Specializations</h3>
              {renderList(data.specializations)}
            </section>

            <section className="profile-section awards-section">
              <h3>Awards and Recognitions</h3>
              {renderList(data.awards)}
            </section>
          </div>

          {/* 3. Education and Memberships - Side-by-Side */}
          <div className="two-column-row">
            <section className="profile-section education-section">
              <h3>Education</h3>
              <ul>
                {data.education.map((edu, index) => (
                  <li key={index}>
                    <strong>{edu.degree}</strong> - {edu.institution}
                  </li>
                ))}
              </ul>
            </section>

            <section className="profile-section memberships-section">
              <h3>Memberships</h3>
              {renderList(data.memberships)}
            </section>
          </div>

          {/* 4. Registrations */}
          <section className="profile-section registrations-section">
            <h3>Registrations</h3>
            {renderList(data.registrations)}
          </section>
        </div>
      <Footer/>
      </div>
    </div>
  );
};
export default DoctorSpecifications;
