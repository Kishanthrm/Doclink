import React from 'react'
import Header from './Header'
import "./HomePage.css"
import logo from "../assets/logo.jpeg";
import bg from "../assets/background.jpg";
import Navbar from './Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const HomePage = () => {
  return (
    <div className='HomePage' style={{ backgroundImage: `url(${bg})` }}>
      <Header/>
      <Navbar/>
    </div>
  )
}

export default HomePage
