import React, { Fragment, useState } from "react";

import "./App.css";
import AddStudentToList from "./components/AddStudentToList";
import StudentList from "./components/StudentList";

export interface IPerson {
  student: {
    image: string;
    name: string;
    id: number | string;
    age: number;
    address: string;
    aboutMe?: string;
  }[];
}

function App() {
  const [student, setStudent] = useState<IPerson["student"]>([]);
  return (
    <div className="App">
      <div className="App">
        <h2>List of students in Android Stack</h2>
        <StudentList student={student} />
      </div>
      <AddStudentToList student={student} setStudent={setStudent} />
    </div>
  );
}

export default App;
