import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { useState } from 'react';
import './App.css';
import Signin from './components/Signin';
import Login from './components/Login';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
