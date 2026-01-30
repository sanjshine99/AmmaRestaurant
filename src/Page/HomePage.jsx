import React from 'react';

import { AboutUs, Chef, FindUs, Gallery, Header, Intro, Laurels, SpecialMenu, MenuCategories, ReviewsSection, AboutSection,MapSection } from '../container';
import BreakfastHero from '../container/BreakfastHero';



const Home = ({ onCategoryClick, selectedCategory }) => (
  <div>

    <Header />
    {/* <AboutUs /> */}
    <AboutSection />
    <BreakfastHero />
    <MenuCategories onCategoryClick={onCategoryClick} />
    <SpecialMenu selectedCategory={selectedCategory} />
    <ReviewsSection />
    <Chef />
    <Intro />
    <Laurels />
    <Gallery />
    <FindUs />
    <MapSection />

  </div>
);

export default Home
