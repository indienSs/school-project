import React, { useState, useEffect } from "react";
import data from "../data.json";

export default function FormAdd() {
  const students = JSON.parse(data);

  const [formData, setFormData] = useState({
    name: "",
    secondName: "",
    classNumber: "",
    letter: "",
    reasons: {},
  });

  function handleChange(event) {
    const { name, value, type, id } = event.target;
    const date = new Date();
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]:
        id === "reasons" && value !== "addNew" && !value
          ? { date: value }
          : value,
    }));
  }

  function addUser(event) {
    event.preventDefault();
    students.map((student) => {
      if (
        student.name !== formData.name &&
        student.secondName !== formData.secondName &&
        student.classNumber !== formData.classNumber
      ) {
        students.push({ id: students.length, ...formData });
      } else {
        students.reasons.push(formData.reasons);
      }
    });
  }

  return (
    <form className="form-add" onSubmit={addUser}>
      <p>
        <b>Добавить информацию</b>
      </p>
      <input
        type="text"
        placeholder="Фамилия"
        name="secondName"
        value={formData.secondName}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Имя"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Номер класса"
        name="classNumber"
        value={formData.classNumber}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="Буква"
        name="letter"
        value={formData.letter}
        onChange={handleChange}
      />
      <select
        id="reasons"
        value={formData.reasons}
        onChange={handleChange}
        name="reasons"
      >
        <option value="">--</option>
        <option value="addNew">Добавить нового ученика</option>
        <option value="Замечание">Замечание по внешнему виду</option>
        <option value="Болезнь">Отсутствие по болезни</option>
      </select>
      <button className="search">Добавить</button>
    </form>
  );
}
