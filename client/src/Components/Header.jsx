import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileDropdown from "./ProfileDropDown";
import { clearAuth } from "../redux/Slices/UserSlice";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-center h-[80px] w-full border-b-[1px] border-iridium">
      <div className="container flex h-full max-w-[1320px] justify-between items-center">
        <div>
          <a href="/">
            <img className="h-[40px]" src="/images/naimix-logo.webp" alt="Naimix Logo" />
          </a>
        </div>
        <div className="flex space-x-4">
          {auth.isAuthenticated ? (
            <ProfileDropdown username={auth.username} />
          ) : (
            <>
              <a
                href="/SignInUpPage/#login"
                className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
              >
                Login
              </a>
              <a
                href="/SignInUpPage/#signup"
                className="bg-green-500 px-4 py-2 rounded hover:bg-green-600"
              >
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
