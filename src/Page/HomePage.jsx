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
    <NewMenu />
    <ReviewsSection />
    <Chef />
    <Intro />
    <Award />
    <Laurels />
    <Gallery />
    <FindUs />
    <MapSection />

  </div>
);

export default Home
