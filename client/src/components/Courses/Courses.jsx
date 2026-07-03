import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Header } from "../Header/Header";
import "./Courses.css";

const fetchCourses = async () => {
  console.log("fetchCourses called");
  const response = await fetch("http://localhost:3000/api/courses");

  if (!response.ok) throw new Error("Failed to fetch courses");

  return response.json();
};

const getCategoryEmoji = (category) => {
  const cat = (category || "").toLowerCase();
  if (cat.includes("development")) return "💻";
  if (cat.includes("engineering")) return "⚙️";
  return "💻";
};

function Courses() {
  const {
    data: courses = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  if (isLoading)
    return (
      <div className="courses-page">
        <p className="status-text">Loading courses...</p>
      </div>
    );
  if (error)
    return (
      <div className="courses-page">
        <p className="status-text error">Error: {error.message}</p>
      </div>
    );

  return (
    <div className="courses-page">
      <Header />
      <div className="courses-content-wrapper">
        <h1 className="courses-title">Explore Our Courses</h1>
        <p className="courses-subtitle">
          Develop high-demand skills with interactive courses designed by
          industry experts.
        </p>
        <div className="courses-container">
          {courses.map((course) => (
            <div key={course._id} className="course-card">
              <div className="card-icon">
                {getCategoryEmoji(course.category)}
              </div>
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <div className="card-tags">
                <span className="tag">{course.category}</span>
                <span className="tag">{course.level}</span>
              </div>
              <div className="card-footer">
                <Link
                  to={`/courses/${course._id}`}
                  className="view-details-button"
                >
                  Registration & Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Courses, fetchCourses };
