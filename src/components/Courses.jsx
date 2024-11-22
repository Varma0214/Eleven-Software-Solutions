import React, { useState } from "react";

function Courses({ courses, setCourses }) {
  const [newCourse, setNewCourse] = useState("");

  const addCourse = () => {
    if (newCourse && !courses.includes(newCourse)) {
      setCourses([...courses, newCourse]);
      setNewCourse("");
    }
  };

  const removeCourse = (course) => {
    setCourses(courses.filter((c) => c !== course));
  };

  return (
    <div>
      <h3>Courses</h3>
      <input
        type="text"
        placeholder="Enter course"
        value={newCourse}
        onChange={(e) => setNewCourse(e.target.value)}
      />
      <button onClick={addCourse}>Add</button>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course} <button onClick={() => removeCourse(course)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;
