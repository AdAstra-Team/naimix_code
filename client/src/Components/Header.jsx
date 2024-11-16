import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const auth = useSelector((state) => state.auth)

  return (
    <div className="flex justify-center h-[80px] w-full border-b-[1px] border-iridium">
      <div className="container flex h-full w-full w-max-[1320px] justify-between items-center">
        <div>
          <a href="/">
            <img
              src="/images/naimix-logo.png"
              alt="Naimix Logo"
              />
          </a>
        </div>
        <div className = "flex space-x-4">
          {auth.isAuthenticated ? (
              <button className = "bg-gray-500 px-4 py-2 rounded-full hover:bg-gray-600">
                  <i className = "fas fa-user">Профиль</i>
              </button>
          ) : (
            <>
              <a href="/SignInUpPage/#login" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">
                  Login
              </a>
              <a href="/SignInUpPage/#signup" className="bg-green-500 px-4 py-2 rounded hover:bg-green-600">
                  Sign Up
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
