import { useEffect, useState } from "react";
import "./Courses.css";
export function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/courses");
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
    setCourses(courses);
  }, []);

  return (
    <>
      <h1>Courses</h1>
      <div className="courses-container">
        {courses.map((course) => (
          <div className="course-card">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
