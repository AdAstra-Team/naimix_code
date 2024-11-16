import React from "react";
import UserCard from "../Components/UserCard";
import { useSelector } from "react-redux";


const Profile = () => {
  var user = useSelector(state => state.auth); 

  return (
    <UserCard user={user}>
      <button className="bg-purple button text-white bg-teal  hover:bg-gray focus:ring-2 focus:ring-purple focus:ring-opacity-50 transition-all">Редактировать</button>
    </UserCard>
  )
};

export default Profile;
