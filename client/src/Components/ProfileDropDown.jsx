import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAuth } from "../redux/Slices/UserSlice";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const username = auth.username;

  const Logout = () => {
    dispatch(clearAuth());
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      {/* Кнопка профиля */}
      <button
        onClick={toggleDropdown}
        className="bg-gray-500 px-4 py-2 rounded-full hover:bg-gray-600 flex items-center gap-2"
      >
        <i className="fas fa-user"></i>
        {username}
      </button>

      {/* Выпадающее меню */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg border border-gray-200 z-10">
          <ul className="py-2">
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="/profile">Профиль</a>
            </li>
            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              <a href="/settings">Настройки</a>
            </li>
            <li
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-red-500"
              onClick={Logout}
            >
              Выйти
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
