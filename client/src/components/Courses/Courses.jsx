import { useMemo } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Header } from "../Header/Header";
import Footer from "../Footer/Footer";
import { CourseCardSkeleton } from "../Skeletons/Skeletons";
import fetchCourses from "./fetchCourses";
import "./Courses.css";

import {
  Box,
  Boxes,
  Braces,
  CircuitBoard,
  Eye,
  Code2,
  BrainCircuit,
  Cpu,
  Waves,
  GitBranch,
  Sigma,
  Sparkles,
  GraduationCap,
} from "lucide-react";

const icons = {
  Box,
  Boxes,
  Braces,
  CircuitBoard,
  Eye,
  Code2,
  BrainCircuit,
  Cpu,
  Waves,
  GitBranch,
  Sigma,
  Sparkles,
  GraduationCap,
};

export function Courses() {
  const {
    data: courses = [],
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

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
        <Header />
        <div className="courses-content-wrapper">
          <h1 className="courses-title">Explore Our Courses</h1>
          <p className="courses-subtitle">
            Develop high-demand skills with interactive courses designed by
            industry experts.
          </p>
          <div className="courses-container">
            {Array.from({ length: 4 }).map((_, i) => (
              <CourseCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    );

  if (error)
    return (
      <div className="courses-page">
        <Header />
        <div className="courses-content-wrapper">
          <div className="error-state">
            <div className="error-state-icon">!</div>
            <h2>Failed to load courses</h2>
            <p>{error.message}</p>
            <button onClick={() => refetch()} className="retry-button">
              Try Again
            </button>
          </div>
        </div>
      </div>
    );

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
          <p className="courses-subtitle">
            Feel free to ask us questions on our social media platforms
            <a
              aria-label="Chat on WhatsApp"
              href="https://wa.me/201288830792?text=I'm%20interested%20in"
            >
              {" "}
              <img alt="Chat on WhatsApp" src="/WhatsAppButtonWhiteLarge.svg" />
            </a>
          </p>
          <div className="courses-container">
            {availableCourses.map((course) => {
              const Icon = icons[course.icon];
              return (
                <div
                  key={course._id}
                  className={`course-card ${course.imageUrl ? "has-bg-image" : ""}`}
                >
                  {course.imageUrl && (
                    <img
                      src={course.imageUrl}
                      className="card-header-image"
                      alt=""
                    />
                  )}
                  <div className="card-icon">
                    <Icon />
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
              );
            })}
          </div>
        </div>
        <div className="coming-soon">
          <h2>Coming Soon</h2>
          <p>Check back later for new courses!</p>
          <div className="coming-soon-courses">
            {comingSoonCourses.map((course) => {
              const Icon = icons[course.icon];

              return (
                <div
                  key={course._id}
                  className={`coming-soon-card ${course.imageUrl ? "has-bg-image" : ""}`}
                >
                  {course.imageUrl && (
                    <img
                      src={course.imageUrl}
                      className="card-header-image"
                      alt=""
                    />
                  )}
                  <div className="card-icon">
                    <Icon />
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
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
