import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Navigation from "./Components/Navigation";

import Profile from "./Pages/Profile";
import Candidates from "./Pages/Candidates";
import CandidatesTaro from "./Pages/CandidatesTaro";
import Teams from "./Pages/Teams";
import Header from "./Components/Header";
import SignInUpPage from "./Pages/SignInUpPage";
import DevComponent from "./Components/devComponent";
import HelpButton from "./Components/HelpButton";
import Metrics from "./Pages/Metrics";
import Histogram from "./Components/Histogram";
import Landing from "./Pages/Landing"

const App = () => {
  const auth = useSelector((state) => state.auth);
  const popup = useSelector((state) => state.popup);

  const handleSupportClick = () => {};

  return (
    <Router>
      <Header />
      {popup.visible && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 shadow-md rounded-lg">
          Ура!
        </div>
      )}
      {auth.isAuthenticated ? (
        <div className="mx-auto mt-8">
          <Navigation />
          <div className="mt-8">
            <Routes>
              <Route path="/" element={<Landing/>} />
              <Route path="/histo" element={<Histogram />}/>
              <Route path="/profile" element={<Profile />} />
              <Route path="/candidates" element={<Navigate to="/teams" />} />
              <Route path="/candidates/:teamId" element={<Candidates />} />
              <Route path="/candidates/:teamId/taro" element={<CandidatesTaro />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/SignInUpPage" element={<SignInUpPage />} />
              <Route path="/devPath" element={<DevComponent />} />
              <Route path="/metrics" element={<Metrics />} />
            </Routes>
          </div>
        </div>
      ) : (
        <SignInUpPage />
      )}
      <Routes>
        <Route path="/" element={<Landing/>}/>
      </Routes>
      <HelpButton />
    </Router>
  );
};

export default App;
