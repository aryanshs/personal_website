import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import "./App.css";

function App() {
  return (
    <div className="appContainer">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/workexperience" element={<WorkExperience />} />
      </Routes>
    </div>
  );
}

export default App;
