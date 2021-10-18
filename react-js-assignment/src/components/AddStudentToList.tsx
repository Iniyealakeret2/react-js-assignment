import React, { useState } from "react";

import { IPerson as Props } from "../App";

interface IProps {
  student: Props["student"];
  setStudent: React.Dispatch<React.SetStateAction<Props["student"]>>;
}

const AddStudentToList: React.FC<IProps> = ({ student, setStudent }) => {
  const [inputValue, setInputValue] = useState({
    name: "",
    age: "",
    id: "",
    address: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    setStudent([
      ...student,
      {
        name: inputValue.name,
        age: parseInt(inputValue.age),
        id: inputValue.id,
        address: inputValue.address,
        image: inputValue.image,
      },
    ]);
    //clear inputs on refresh
    setInputValue({
      name: "",
      age: "",
      id: "",
      address: "",
      image: "",
    });
  };

  return (
    <div className="addToList">
      <h2>enter new student details below</h2>
      <input
        className="addToList-input"
        type="text"
        placeholder="enter name"
        value={inputValue.name}
        name="name"
        onChange={handleChange}
      />
      <input
        className="addToList-input"
        type="text"
        placeholder="enter age"
        value={inputValue.age}
        name="age"
        onChange={handleChange}
      />
      <input
        className="addToList-input"
        type="text"
        placeholder="enter Id"
        value={inputValue.id}
        name="id"
        onChange={handleChange}
      />
      <input
        className="addToList-input"
        type="text"
        placeholder="enter address"
        value={inputValue.address}
        name="address"
        onChange={handleChange}
      />
      <input
        className="addToList-input"
        type="text"
        placeholder="enter image url"
        value={inputValue.image}
        name="image"
        onChange={handleChange}
      />
      <div>
        <button className="add-btn" onClick={handleClick}>
          add new student
        </button>
      </div>
    </div>
  );
};

export default AddStudentToList;
