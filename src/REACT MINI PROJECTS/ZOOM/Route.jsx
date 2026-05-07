
import LandingPage from "./LandingPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import React from "react";

function AppRoute() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRoute;