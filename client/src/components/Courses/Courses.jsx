import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import fetchCourses from "./fetchCourses";
import "./Courses.css";

const getCategoryEmoji = (category) => {
  const cat = (category || "").toLowerCase();
  if (cat.includes("development")) return "💻";
  if (cat.includes("engineering")) return "⚙️";
  return "💻";
};

export function Courses() {
  // const [searchTerm, setSearchTerm] = useState("");
  // const [filteredCourses, setFilteredCourses] = useState([]);
  // const [notAvailable, setNotAvailable] = useState([]);
  const {
    data: courses = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  // useEffect(() => {
  //   const term = searchTerm.toLowerCase();

  //   const notAvailableCourses = courses.filter((course) => !course.isAvailable);
  //   setNotAvailable(notAvailableCourses);

  //   const filtered = courses.filter((course) => course.isAvailable);
  //   setFilteredCourses(filtered);
  // }, [searchTerm, courses]);

  const availableCourses = useMemo(
    () => courses.filter((course) => course.isAvailable),
    [courses],
  );

  const comingSoonCourses = useMemo(
    () => courses.filter((course) => !course.isAvailable),
    [courses],
  );

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

  console.log(availableCourses);
  console.log(comingSoonCourses);

  return (
    <>
      <div className="courses-page">
        <Header />
        <div className="courses-content-wrapper">
          <h1 className="courses-title">Explore Our Courses</h1>
          <p className="courses-subtitle">
            Develop high-demand skills with interactive courses designed by
            industry experts.
          </p>
          <div className="courses-container">
            {availableCourses.map((course) => (
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
        <div className="coming-soon">
          <h2>Coming Soon</h2>
          <p>Check back later for new courses!</p>
          <div className="coming-soon-courses">
            {comingSoonCourses.map((course) => (
              <div key={course._id} className="coming-soon-card">
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
                    Submit Interest
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
