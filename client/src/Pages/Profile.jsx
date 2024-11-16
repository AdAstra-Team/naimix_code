import React from "react";
import UserCard from "../Components/UserCard";

const user = {
  name: "Алексей",
  surname: "Антошкин-круглов",
  number: "+7 (800) 555-35-35",
  email: "imposter@sus.io",
  birthday: Date.now(),
  sign: 2,
}

const Profile = () => {
  return (
    <UserCard user={user} />
  );
};

export default Profile;
