import React, { useState } from "react";

function Registrations({ publishableCourses }) {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [registrations, setRegistrations] = useState([]);
  const [studentName, setStudentName] = useState("");

  const registerStudent = () => {
    if (studentName && selectedCourse) {
      setRegistrations([...registrations, { name: studentName, course: selectedCourse }]);
      setStudentName("");
    }
  };

  // Function to delete a registration
  const deleteRegistration = (index) => {
    const updatedRegistrations = registrations.filter((_, i) => i !== index);
    setRegistrations(updatedRegistrations);
  };

  return (
    <div>
      <h3>Registrations</h3>
      <select onChange={(e) => setSelectedCourse(e.target.value)} value={selectedCourse}>
        <option value="">Select Course</option>
        {publishableCourses.map((course, index) => (
          <option key={index} value={course}>
            {course}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button onClick={registerStudent}>Register</button>
      
      <ul>
        {registrations.map((reg, index) => (
          <li key={index}>
            {`${reg.name} - ${reg.course}`}
            <button onClick={() => deleteRegistration(index)} style={deleteButtonStyle}>
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

export default Registrations;