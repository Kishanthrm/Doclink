import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Signin from "./components/Signin";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Context/ContextProvider";
import MyAppointmentsPage from './components/MyAppointmentsPage';
import DoctorSpecifications from "./components/DoctorSpecifications";
import DashboardProfile from "./components/DashboardProfile";

function App() {
  return (
    <div className="app">
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<DoctorSpecifications/>} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/myappointments" element={<MyAppointmentsPage/>} />
            <Route path="/profile" element={<DashboardProfile/>} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;
