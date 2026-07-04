import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { fetchCourses } from "../Courses/Courses";

export function Registration() {
  const { _id } = useParams();

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
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      courseTitle: course.title, // Automatically set the course title based on the selected course
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      },
    );

    if (!response.ok) {
      throw new Error("Failed to submit registration");
    }

    return response.json();
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
    </>
  );
}
