import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { Courses } from "./components/Courses/Courses";
import { Landing } from "./components/Landing/Landing";
import { CourseDetails } from "./components/Courses/CourseDetails";

function NotFound() {
  return (
    <div className="not-found">
      <h1>Page is not available</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to="/">Return Home</Link>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:_id" element={<CourseDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
