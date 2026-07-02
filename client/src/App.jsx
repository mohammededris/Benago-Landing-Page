import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Courses } from "./components/Courses/Courses";
import { Landing } from "./components/Landing/Landing";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/courses" element={<Courses />} />
    </Routes>
  );
}

export default App;
