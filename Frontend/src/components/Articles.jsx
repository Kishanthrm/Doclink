import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Articles() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: "white" }}>
        Read top articles from health experts
      </h2>

      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {/* ===== Slide 1 ===== */}
          <div className="carousel-item active">
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img
                  src="https://www.practostatic.com/fit/3d1288fb7ca06917c0c207426e73f38c45618109"
                  className="card-img-top"
                  alt="ORS Day"
                />
                <div className="card-body">
                  <h5 className="card-title">ORS Day - Spread the Message</h5>
                  <p className="card-text text-muted">
                    Ms. Swati Kapoor, Dietitian/Nutritionist
                  </p>
                  <p className="card-text">
                    <small>1007 Likes • 4925 Views</small>
                  </p>
                </div>
              </div>

              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img
                  src="https://www.practostatic.com/fit/deb3abe65eca57e1e3d60246943b128efb97c725"
                  className="card-img-top"
                  alt="Perfect Routine"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    The Perfect Routine - Lose Weight Throughout the Day,
                    Everyday!
                  </h5>
                  <p className="card-text text-muted">
                    Ms. Swati Kapoor, Dietitian/Nutritionist
                  </p>
                  <p className="card-text">
                    <small>557 Likes • 153491 Views</small>
                  </p>
                </div>
              </div>

              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img
                  src="https://www.practostatic.com/fit/41f651e5ff8f572ef41f30b66822ab551724efb2"
                  className="card-img-top"
                  alt="Coconut Water"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    8 Benefits of Drinking Coconut Water Daily
                  </h5>
                  <p className="card-text text-muted">Dr. Namrata Surati</p>
                  <p className="card-text">
                    <small>449 Likes • 30953 Views</small>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Slide 2 (optional) ===== */}
          <div className="carousel-item active">
            <div className="d-flex justify-content-center gap-4 flex-wrap">
              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img
                  src="https://www.practostatic.com/fit/3d1288fb7ca06917c0c207426e73f38c45618109"
                  className="card-img-top"
                  alt="ORS Day"
                />
                <div className="card-body">
                  <h5 className="card-title">ORS Day - Spread the Message</h5>
                  <p className="card-text text-muted">
                    Ms. Swati Kapoor, Dietitian/Nutritionist
                  </p>
                  <p className="card-text">
                    <small>1007 Likes • 4925 Views</small>
                  </p>
                </div>
              </div>

              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img
                  src="https://www.practostatic.com/fit/deb3abe65eca57e1e3d60246943b128efb97c725"
                  className="card-img-top"
                  alt="Perfect Routine"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    The Perfect Routine - Lose Weight Throughout the Day,
                    Everyday!
                  </h5>
                  <p className="card-text text-muted">
                    Ms. Swati Kapoor, Dietitian/Nutritionist
                  </p>
                  <p className="card-text">
                    <small>557 Likes • 153491 Views</small>
                  </p>
                </div>
              </div>

              <div className="card shadow-sm" style={{ width: "18rem" }}>
                <img
                  src="https://www.practostatic.com/fit/41f651e5ff8f572ef41f30b66822ab551724efb2"
                  className="card-img-top"
                  alt="Coconut Water"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    8 Benefits of Drinking Coconut Water Daily
                  </h5>
                  <p className="card-text text-muted">Dr. Namrata Surati</p>
                  <p className="card-text">
                    <small>449 Likes • 30953 Views</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* More Articles Button */}
      <div className="text-center mt-4">
        <button className="btn btn-info text-white fw-semibold px-4">
          More articles
        </button>
      </div>
    </div>
  );
}
