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
    courseId: _id,
    name: "",
    email: "",
    phoneNumber: "",
    university: "",
    courseTitle: "",
    note: "",
    sendConfirmationEmail: false,
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
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
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || "Failed to submit registration");
      }

      await response.json();
      setShowSuccess(true);
    } catch (err) {
      setSubmitError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form className="registration-form" onSubmit={handleSubmit}>
        <h1>Register</h1>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          placeholder="Enter your name"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />

        <label htmlFor="phoneNumber">Phone:</label>
        <input
          type="number"
          placeholder="Enter your phone number"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />

        <label htmlFor="university">University:</label>
        <input
          type="text"
          placeholder="Enter your university"
          id="university"
          name="university"
          value={formData.university}
          onChange={handleChange}
          required
          disabled={isSubmitting}
        />

        <label htmlFor="note">Note:</label>
        <textarea
          id="note"
          placeholder="Enter any additional notes"
          name="note"
          value={formData.note}
          onChange={handleChange}
          disabled={isSubmitting}
        />

        {submitError && <p className="form-error">{submitError}</p>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? (
            <span className="button-loading">
              <span className="spinner" />
              Submitting...
            </span>
          ) : (
            "Submit"
          )}
        </button>
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
