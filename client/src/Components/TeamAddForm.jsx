import React, { useState } from "react";
import { SIGNS } from "../Utils/constants";
import { useSelector } from "react-redux";

import fetch from "../Utils/fetch";

const TeamAddForm = ({ onClose }) => {
  const auth = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: "",
    signs: ["Рыбы"]
  });

  const addMember = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      signs: [...formData.signs, "Рыбы"]
    });
  };

  const removeMember = (index) => {
    setFormData({
      ...formData,
      signs: formData.signs.filter((_, i) => i !== index)
    });
  };

  const handleChange = (e, index) => {
    setFormData({
      ...formData,
      signs: formData.signs.map((sign, i) => (i === index ? e.target.value : sign))
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch.post("/teams", {
      name: formData.name,
      signs: formData.signs.map((sign) => SIGNS.findIndex((val) => val === sign)),
      recruiterId: auth.id
    });

    onClose();

    console.log(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Добавление команды</h2>
        <button className="text-red-500 text-xl" onClick={onClose}>
          &times;
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Название команды
          </label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        {formData.signs.map((sign, index) => (
          <div key={index} className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="sign">
              Знак зодиака участника {index + 1}
            </label>
            <select
              className="w-full border border-gray-300 rounded-lg p-2"
              id="sign"
              name="sign"
              value={sign}
              onChange={(e) => handleChange(e, index)}
            >
              {SIGNS.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
            {index > 0 && (
              <button className="text-red underline" onClick={() => removeMember(index)}>
                Удалить участника
              </button>
            )}
          </div>
        ))}
        <div className="flex justify-between mt-4">
          <button className="text-teal underline cursor-pointer" onClick={addMember}>
            Добавить участника
          </button>
          <button className="button bg-teal focus:bg-red text-white" type="submit">
            Добавить команду
          </button>
        </div>
      </form>
    </div>
  );
};

export default TeamAddForm;
