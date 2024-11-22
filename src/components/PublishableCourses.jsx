import React, { useState } from "react";

function PublishableCourses({ courseTypes, courses, publishableCourses, setPublishableCourses }) {
  const [selectedType, setSelectedType] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  // Function to add a publishable course
  const addPublishableCourse = () => {
    if (selectedType && selectedCourse) {
      const newEntry = `${selectedType}, ${selectedCourse}`;
      if (!publishableCourses.includes(newEntry)) {
        setPublishableCourses([...publishableCourses, newEntry]);
      }
    }
  };

  // Function to delete a publishable course
  const deletePublishableCourse = (index) => {
    const updatedCourses = publishableCourses.filter((_, i) => i !== index);
    setPublishableCourses(updatedCourses);
  };

  return (
    <div>
      <h3>Publishable Courses</h3>
      <select onChange={(e) => setSelectedType(e.target.value)} value={selectedType}>
        <option value="">Select Type</option>
        {courseTypes.map((type, index) => (
          <option key={index} value={type}>
            {type}
          </option>
        ))}
      </select>
      <select onChange={(e) => setSelectedCourse(e.target.value)} value={selectedCourse}>
        <option value="">Select Course</option>
        {courses.map((course, index) => (
          <option key={index} value={course}>
            {course}
          </option>
        ))}
      </select>
      <button onClick={addPublishableCourse}>Add</button>

      <ul>
        {publishableCourses.map((pc, index) => (
          <li key={index}>
            {pc}
            <button onClick={() => deletePublishableCourse(index)} style={deleteButtonStyle}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Inline styles for the delete button
const deleteButtonStyle = {
  backgroundColor: "#e74c3c",
  color: "white",
  border: "none",
  padding: "5px 10px",
  fontSize: "12px",
  cursor: "pointer",
  borderRadius: "4px",
  marginLeft: "10px",
};

export default PublishableCourses;
