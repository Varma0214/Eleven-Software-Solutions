import React, { useState } from "react";

function CourseTypes({ courseTypes, setCourseTypes }) {
  const [newType, setNewType] = useState("");

  const addType = () => {
    if (newType && !courseTypes.includes(newType)) {
      setCourseTypes([...courseTypes, newType]);
      setNewType("");
    }
  };

  const removeType = (type) => {
    setCourseTypes(courseTypes.filter((t) => t !== type));
  };

  return (
    <div>
      <h3>Course Types</h3>
      <input
        type="text"
        placeholder="Enter course type"
        value={newType}
        onChange={(e) => setNewType(e.target.value)}
      />
      <button onClick={addType}>Add</button>
      <ul>
        {courseTypes.map((type, index) => (
          <li key={index}>
            {type} <button onClick={() => removeType(type)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseTypes;
