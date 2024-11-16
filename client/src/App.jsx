import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import Navigation from "./Components/Navigation";

import Profile from "./Pages/Profile";
import Candidates from "./Pages/Candidates";
import Teams from "./Pages/Teams";
import Header from "./Components/Header";
import SignInUpPage from "./Pages/SignInUpPage";

const App = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <Router>
      <Header />
      {auth.isAuthenticated ? (
        <div className="container max-w-[1320px] mx-auto mt-8">
          <Navigation />
          <div className="mt-8">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/candidates" element={<Candidates />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/SignInUpPage" element={<SignInUpPage />} />
            </Routes>
          </div>
        </div>
      ) : (
        <SignInUpPage />
      )}
    </Router>
  );
};

export default App;
