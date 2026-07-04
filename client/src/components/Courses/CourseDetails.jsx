import { useQuery } from "@tanstack/react-query";
import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import fetchCourses from "./fetchCourses";
import { Registration } from "../Registration/Registration";
import { Header } from "../Header/Header";

import "./CourseDetails.css";

export function CourseDetails() {
  const { _id } = useParams();
  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const course = courses.find((course) => course._id === _id);
  console.log("CourseDetails rendered", course);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [_id]);

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
        </div>
      ) : (
        <p>Course not found</p>
      )}
      <Registration />
    </>
  );
}
