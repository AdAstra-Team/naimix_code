import axios from "axios";
import React, { useState } from "react";
import { SIGNS } from "../Utils/constants";

const CandidateAddForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    fio: "",
    phone: "",
    email: "",
    dob: "",
    zodiac: "Рыбы",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    var response = await axios.post("http://194.87.186.59:8082/candidate", 
        {
            name: formData.name,
            surname: formData.surname,
            photo: [],
            birthday: new Date(formData.dob).getTime()/1000,
            sign: SIGNS.findIndex((val, index) => val == formData.zodiac),
            typeOfDestinyCompute: 0,
        },
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )

    onClose();

    console.log(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Добавление кандидата</h2>
        <button className="text-red-500 text-xl" onClick={onClose}>
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="fio">
            Имя
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            type="text"
            id="fio"
            name="fio"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="fio">
            Фамилия
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            type="text"
            id="fio"
            name="fio"
            value={formData.surname}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="phone">
            Номер телефона
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Почта
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="dob">
            Дата рождения
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="zodiac">
            Знак зодиака
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg p-2"
            id="zodiac"
            name="zodiac"
            value={formData.zodiac}
            onChange={handleChange}
          >
            {SIGNS.map((item) => (<option>{item}</option>))}
          </select>
        </div>
        {/* <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="tarot">
            Расклад таро
          </label>
          <select
            className="w-full border border-gray-300 rounded-lg p-2"
            id="tarot"
            name="tarot"
            value={formData.tarot}
            onChange={handleChange}
          >
            <option>Рыбы</option>
            <option>Телец</option>
            <option>Остальные</option>
            <option>Телец</option>
            <option>Телец</option>
          </select>
        </div> */}
        <div className="flex justify-center">
          <button className="bg-orange-500 rounded-lg px-4 py-2" type="submit">
            Добавить кандидата
          </button>
        </div>
      </form>
    </div>
  );
};

export default CandidateAddForm;
