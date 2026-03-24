import React from 'react'
import ScrollMenu from '../breakfast/TextScroll'
import Event from '../breakfast/Event'
import Contact from '../breakfast/ReservationSection'
import MenuSection from '../breakfast/MenuSection'
import BreakHeroSection from '../breakfast/Header'
import AboutSection from '../breakfast/About'

const BreakFastPage = () => {
  return (
    <div>
      <BreakHeroSection />
      <AboutSection />
      <MenuSection />
      <ScrollMenu />
      <Event />
      <Contact />
    </div>
  )
}

export default BreakFastPage
