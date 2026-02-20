import React from 'react';
import Hero from './Hero';
import VisionMission from './VisionMission';
import About from './About';
import Services from './Services';
import ContactFooter from './ContactFooter';

const Home = () => {
  return (
    <>
      <Hero />
      <VisionMission />
      <About />
      <Services />
      <ContactFooter />
    </>
  );
};

export default Home;