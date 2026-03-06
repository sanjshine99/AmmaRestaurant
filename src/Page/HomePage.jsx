import React from 'react';

import { Chef, FindUs, Gallery, Header, Intro, Laurels, SpecialMenu, MenuCategories, ReviewsSection, AboutSection,MapSection } from '../container';
import BreakfastHero from '../container/BreakfastHero';
import NewMenu from '../container/NewMenu';
import Banner from '../components/Banner';



const Home = ({ onCategoryClick, selectedCategory }) => (
  <div>

    <Header />
    <Banner />
    <AboutSection />
    <MenuCategories onCategoryClick={onCategoryClick} />
    <NewMenu />
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
