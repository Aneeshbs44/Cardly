/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "motion/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Loader } from "./components/Loader";
import { LandingPage } from "./pages/LandingPage";
import { AnalyzerPage } from "./pages/AnalyzerPage";
import { ResultsPage } from "./pages/ResultsPage";
import { ExplorePage } from "./pages/ExplorePage";
import { WhyUsPage } from "./pages/WhyUsPage";
import { ResourcesPage } from "./pages/ResourcesPage";
import { SignupPage } from "./pages/SignupPage";
import { SigninPage } from "./pages/SigninPage";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    // Initial check for user session could go here
  }, []);

  const handleEmailSubmit = (email: string) => {
    setUserEmail(email);
    // In a real app, we might redirect to signup with this email
  };

  return (
    <Router>
      <AnimatePresence>
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <Routes>
            <Route path="/" element={<LandingPage onEmailSubmit={handleEmailSubmit} />} />
            <Route path="/analyzer" element={<AnalyzerPage userEmail={userEmail} />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/why-us" element={<WhyUsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
          </Routes>
        )}
      </AnimatePresence>
    </Router>
  );
};

export default App;
