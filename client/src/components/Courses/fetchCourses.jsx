const fetchCourses = async () => {
  console.log("fetchCourses called");
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/courses`);

  if (!response.ok) throw new Error("Failed to fetch courses");

  return response.json();
};

export default fetchCourses;
