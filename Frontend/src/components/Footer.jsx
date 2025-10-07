import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
const Footer = () => {
  return (
    <div>
      <footer>
        <div class="container">
          {" "}
          <footer class="py-3 my-4">
            {" "}
            <ul class="nav">
              {"  "}
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Home
                </a>
              </li>{" "}
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Features
                </a>
              </li>{" "}
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Pricing
                </a>
              </li>{" "}
              <li class="nav-item">
                <a href="#" class="nav-link">
                  FAQs
                </a>
              </li>{" "}
              <li class="nav-item">
                <a href="#" class="nav-link">
                  About
                </a>
              </li>{" "}
            </ul>{" "}
            <p class="text-center">© 2025 Company, Inc</p>{" "}
          </footer>{" "}
        </div>
      </footer>
    </div>
  )
}

export default Footer
