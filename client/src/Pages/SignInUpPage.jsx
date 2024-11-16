import React, { useEffect, useState } from "react";
import LoginForm from "../Components/LoginForm";
import SignUpForm from "../Components/SignUpForm";

const SignInUpPage = () => {
  const [page, setPage] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the '#' character
      setPage(hash);
    };

    window.addEventListener("hashchange", handleHashChange);

    // Set the initial page based on the current hash
    handleHashChange();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <div>
      {page === "login" && <LoginForm />}
      {page === "signup" && <SignUpForm />}
    </div>
  );
};

export default SignInUpPage;
