import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage"
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