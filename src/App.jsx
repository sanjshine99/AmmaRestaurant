import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./Page/HomePage";
import PrivacyPolicy from "./Page/PrivacyPolicy";
import Term from "./Page/Term";
import BreakFastPage from "./Page/BreakFastPage";
import BookingSection from "./components/Reservation";

import { Navbar } from "./components";
import { Footer } from "./container";
import GDPRBanner from "./container/GDPRBanner";
import ScrollToHash from "./components/ScrollToHash";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
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

      {/* Wrap major routes in ErrorBoundary */}
      <ErrorBoundary>
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
          <Route path="/breakfast" element={<BreakFastPage />} />
          <Route path="/reservation" element={<BookingSection />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Term />} />
        </Routes>
      </ErrorBoundary>

      <Footer />
    </>
  );
};

export default App;