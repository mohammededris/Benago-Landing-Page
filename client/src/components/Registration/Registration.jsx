import { useQuery } from "@tanstack/react-query";
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import fetchCourses from "../Courses/fetchCourses";

export function Registration() {
  const { _id } = useParams();
  const navigate = useNavigate();

  const { data: courses = [] } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  const course = courses.find((course) => course._id === _id);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    university: "",
    courseTitle: "",
    note: "",
    sendConfirmationEmail: false,
  });

  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = { ...formData, courseTitle: course.title };

    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to submit registration");
    }

    await response.json();
    setShowSuccess(true);
  };

  return (
    <>
      <form className="registration-form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          required
        />

        <label htmlFor="phoneNumber">Phone:</label>
        <input
          type="number"
          id="phoneNumber"
          name="phoneNumber"
          onChange={handleChange}
          required
        />

        <label htmlFor="university">University:</label>
        <input
          type="text"
          id="university"
          name="university"
          onChange={handleChange}
          required
        />

        <label htmlFor="note">Note:</label>
        <textarea id="note" name="note" onChange={handleChange}></textarea>

        <button type="submit">Submit</button>
      </form>

      {showSuccess && (
        <div className="success-popup-overlay">
          <div className="success-popup">
            <h2>Submission successfully</h2>
            <p>Your registration has been sent.</p>
            <button type="button" onClick={() => navigate("/")}>
              Return Home
            </button>
          </div>
        </div>
      )}
    </>
  );
}
