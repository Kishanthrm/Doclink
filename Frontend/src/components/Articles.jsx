import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Articles({ newsdata }) {
  const articles = newsdata || [];

  // Group into 3 per slide
  const groupedArticles = [];
  for (let i = 0; i < articles.length; i += 3) {
    groupedArticles.push(articles.slice(i, i + 3));
  }

  return (
    <div className="container my-5">
      <h2 className="text-center mb-5 fw-bold" style={{ color: "black" }}>
        Read top articles from health experts
      </h2>

      <div id="articleCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {groupedArticles.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className={`carousel-item ${groupIndex === 0 ? "active" : ""}`}
            >
              <div className="d-flex justify-content-center flex-wrap gap-4">
                {group.map((article, index) => (
                  <div
                    key={index}
                    className="card shadow-sm d-flex flex-column"
                    style={{
                      width: "18rem",
                      minHeight: "400px", // ensures consistent height
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <img
                      src={article.image_url || "https://via.placeholder.com/300x200?text=No+Image"}
                      className="card-img-top"
                      alt={article.title}
                      style={{ height: "180px", objectFit: "cover" }}
                    />
                    <div
                      className="card-body d-flex flex-column justify-content-between"
                      style={{ flex: "1 1 auto" }}
                    >
                      <div>
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text text-muted mb-2">
                          {article.source_name || "Unknown Source"}
                        </p>
                        <p className="card-text">
                          <small>
                            {new Date(article.pubDate).toLocaleDateString()} |{" "}
                            {article.country?.join(", ") || "N/A"}
                          </small>
                        </p>
                      </div>
                      <div className="mt-auto text-center">
                        <a
                          href={article.link}
                          className="btn btn-info btn-sm text-white fw-semibold"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Read More »
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#articleCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#articleCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* More Articles Button */}
      <div className="text-center mt-4">
        <button
          className="btn btn-info text-white fw-semibold px-4"
        >
          More articles
        </button>
      </div>
    </div>
  );
}
