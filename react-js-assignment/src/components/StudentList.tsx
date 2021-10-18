import React from "react";

import { IPerson as IProps } from "../App";

// interface IProps {
//   student: {
//     image: string;
//     name: string;
//     id: number | string;
//     age: number;
//     address: string;
//     aboutMe?: string;
//   }[];
// }

const StudentList: React.FC<IProps> = ({ student }) => {
  const renderStudentList = (): JSX.Element[] => {
    return student.map((student) => {
      return (
        <div className="containerList">
          <li className="list">
            <img className="list-img" src={student.image} />
            <h4 className="name">Name</h4>
            <p>{student.name}</p>
            <h4>Id</h4>
            <p>{student.id}</p>
            <h4>Age</h4>
            <p>{student.age} years old</p>
            <h4>Address</h4>
            <p>{student.address}</p>
          </li>
        </div>
      );
    });
  };
  return <ul>{renderStudentList()}</ul>;
};

export default StudentList;
