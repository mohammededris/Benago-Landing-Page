import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchCourses } from "./Courses";
import { Registration } from "../Registration/Registration";

import "./CourseDetails.css";

export function CourseDetails() {
  const { _id } = useParams();
  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const course = courses.find((course) => course._id === _id);
  console.log("CourseDetails rendered", course);


  return (
    <>
      {course ? (
        <div className="course-details">
          <h1>{course.title}</h1>
          <p>{course.description}</p>
          <span className="tag">{course.category}</span>
          <span className="tag">{course.level}</span>
        </div>
      ) : (
        <p>Course not found</p>
      )}
      <Registration />
    </>
  );
}
