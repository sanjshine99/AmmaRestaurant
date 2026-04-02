import React from 'react';

import { Chef, FindUs, Gallery, Header, Intro, Laurels, MenuCategories, ReviewsSection, AboutSection,MapSection } from '../container';
import NewMenu from '../container/NewMenu';
import Banner from '../components/Banner';
import Award from '../components/Award';



const Home = ({ onCategoryClick, selectedCategory }) => (
  <div>

    <Header />
    <Banner />
    <AboutSection />
    <MenuCategories onCategoryClick={onCategoryClick} />
    <Award />
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
