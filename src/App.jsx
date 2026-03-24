import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Page/HomePage";
import PrivacyPolicy from "./Page/PrivacyPolicy";
import Term from "./Page/Term";

import { Navbar } from "./components";
import { Footer } from "./container";
import GDPRBanner from "./container/GDPRBanner";
import BreakFastPage from "./Page/BreakFastPage";
import ScrollToHash from "./components/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  // State to manage selected category for menu navigation
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <GDPRBanner />
      <ScrollToHash />
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onCategoryClick={handleCategoryClick}
              selectedCategory={selectedCategory}
            />
          }
        />
        <Route
          path="/breakfast"
          element={<BreakFastPage />}
        />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy />}
        />
        <Route
          path="/terms"
          element={<Term />}
        />
      </Routes>

      <Footer />
    </>
  );
};

export default App;