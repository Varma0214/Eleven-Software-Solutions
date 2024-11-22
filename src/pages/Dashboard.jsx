
import React, { useState } from "react";
import CourseTypes from "../components/CourseTypes";
import Courses from "../components/Courses";
import PublishableCourses from "../components/PublishableCourses";
import Registrations from "../components/Registrations";

function Dashboard() {
  const [courseTypes, setCourseTypes] = useState([]);
  const [courses, setCourses] = useState([]);
  const [publishableCourses, setPublishableCourses] = useState([]);

  return (
    <div>
      <h1>Course Management</h1>
      <CourseTypes courseTypes={courseTypes} setCourseTypes={setCourseTypes} />
      <Courses courses={courses} setCourses={setCourses} />
      <PublishableCourses
        courseTypes={courseTypes}
        courses={courses}
        publishableCourses={publishableCourses}
        setPublishableCourses={setPublishableCourses}
      />
      <Registrations publishableCourses={publishableCourses} />
    </div>
  );
}

export default Dashboard;
