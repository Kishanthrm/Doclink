import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Context/ContextProvider";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import Signin from "./components/Signin";
import Login from "./components/Login";
import BookAppointment from "./components/BookAppointment";
import MedicalRecords from "./components/MedicalRecords";
import DashboardProfile from "./components/DashboardProfile";
import MyAppointmentsPage from './components/MyAppointmentsPage';
import DoctorSpecifications from "./components/DoctorSpecifications";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Doctorlogin from "./components/Doctorlogin";
import Doctorsignin from "./components/Doctorsignin";
import Doctordashboard from "./components/Doctordashboard";
import PatientDetails from "./components/PatientDetails";


function App() {
  return (
    <div className="app">
      <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bookappoinments" element={<BookAppointment />} />
            <Route path="/myappoinments" element={<MyAppointmentsPage />} />
            <Route path="/medicalrecords" element={<MedicalRecords />} />
            <Route path="/profile" element={<DashboardProfile/>} />
            <Route path="/specifications" element={<DoctorSpecifications/>} />
            <Route path="/doctorlogin" element={<Doctorlogin/>} />
            <Route path="/doctorsignin" element={<Doctorsignin/>} />
            <Route path="/doctordashboard" element={<Doctordashboard/>} />
            <Route path="/patientdetails" element={<PatientDetails/>} />
          </Routes>
        </Router>
      </ContextProvider>
    </div>
  );
}

export default App;