import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContextProvider } from "./Context/ContextProvider";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import Signin from "./components/Signin";
import Login from "./components/Login";
import MedicalRecords from "./components/MedicalRecords";
import BookAppointment from "./components/BookAppointment";
import DashboardProfile from "./components/DashboardProfile";
import MyAppointmentsPage from './components/MyAppointmentsPage';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";


function App() {
  return (
    <div className="app">
      {/* <ContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/bookappointments" element={<BookAppointment/>} />
            <Route path="/myappointments" element={<MyAppointmentsPage />} />
            <Route path="/medicalrecords" element={<MedicalRecords />} />
            <Route path="/profile" element={<DashboardProfile/>} />
          </Routes>
        </Router>
      </ContextProvider> */}
      <BookAppointment/>
    </div>
  );
}

export default App;