import React from "react";
import UserCard from "../Components/UserCard";
import { useSelector } from "react-redux";

const Profile = () => {
  var user = useSelector((state) => state.auth);

  return (
    <div className="container mx-auto max-w-[1320px]">
      <UserCard user={user}>
        <button className="bg-purple button text-white hover:bg-gray focus:ring-2 focus:ring-purple focus:ring-opacity-50 transition-all">
          Редактировать
        </button>
      </UserCard>
    </div>
  );
};

export default Profile;
