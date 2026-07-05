import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import fetchCourses from "./fetchCourses";
import { Registration } from "../Registration/Registration";
import { Header } from "../Header/Header";
import { CourseDetailsSkeleton } from "../Skeletons/Skeletons";

import "./CourseDetails.css";

export function CourseDetails() {
  const { _id } = useParams();
  const { data: courses = [], isLoading, error } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const course = courses.find((course) => course._id === _id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [_id]);

  if (isLoading)
    return (
      <>
        <Header />
        <CourseDetailsSkeleton />
      </>
    );

  if (error)
    return (
      <>
        <Header />
        <div className="course-details">
          <div className="error-state">
            <div className="error-state-icon">!</div>
            <h2>Failed to load course details</h2>
            <p>{error.message}</p>
          </div>
        </div>
      </>
    );

  return (
    <>
      <Header />
      {course ? (
        <div className="course-details">
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <span className="tag">{course.category}</span>
          <span className="tag">{course.level}</span>
          <Link to="/courses" className="view-all-courses">
            ← Back to All Courses
          </Link>
          <Registration />
        </div>
      ) : (
        <div className="course-details">
          <div className="error-state">
            <div className="error-state-icon">?</div>
            <h2>Course not found</h2>
            <p>
              The course you are looking for does not exist or may have been
              removed.
            </p>
            <Link to="/courses" className="retry-button">
              Browse All Courses
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
