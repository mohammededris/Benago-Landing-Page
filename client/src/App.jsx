import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Courses } from "./components/Courses/Courses";
import { Landing } from "./components/Landing/Landing";
import { CourseDetails } from "./components/Courses/CourseDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:_id" element={<CourseDetails />} />
    </Routes>
  );
}

export default App;
