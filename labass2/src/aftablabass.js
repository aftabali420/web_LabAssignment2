import React from 'react';

const LastSemester = () => {
  const courses = [
    { name: 'Course 1--DataStructure', marks: 20 },
    { name: 'Course 2--WebTechnology', marks: 30 },
    { name: 'Course 3--Stats and Probaibility', marks: 35 },
    { name: 'Course 4--OOSE', marks: 40 },
    { name: 'Course 5--DataBase', marks: 47 },
  ];

  const getButtonStyle = (marks) => {
    if (marks < 25) {
      return { backgroundColor: 'red', fontSize: '12px' };
    } else if (marks < 30) {
      return { backgroundColor: 'yellow', fontSize: '12px' };
    } else if (marks < 35) {
      return { backgroundColor: 'lightblue', fontSize: '12px' };
    } else if (marks < 40) {
      return { backgroundColor: 'darkgreen', fontSize: '16px' };
    } else if (marks < 45) {
      return { backgroundColor: 'lightgray', fontSize: '16px' };
    } else {
      return { backgroundColor: 'lightblue', fontSize: '16px' };
    }
  };

  return (
    <div>
      <h1>AFTAB ALI</h1>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            {course.name}:
            <button style={getButtonStyle(course.marks)}>
              Midterm: {course.marks}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LastSemester;
