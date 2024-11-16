import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux';

import Navigation from "./Components/Navigation";

import Profile from "./Pages/Profile";
import Candidates from "./Pages/Candidates";
import Teams from "./Pages/Teams";
import Header from "./Components/Header";

const App = () => {

  const auth = useSelector((state) => state.auth);

  return (
    <Router>
      <Header />
      <div className="container mx-auto mt-8">
        <Navigation />
        <div className="mt-8">
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/teams" element={<Teams />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
