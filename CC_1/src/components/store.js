import React from 'react';
import NavbarTop from './navbar';
import MainContent from './main';
import CardSection1 from './card1';
import CardSection2 from './card2';
import CardSection3 from './card3';
import AboutSection from './about';
import Footer from './footer';

const Store = () => {
  return (
    <>
      <NavbarTop />
      <MainContent />
      <CardSection1 />
      <CardSection2 />
      <CardSection3 />
      <AboutSection />
      <Footer />
    </>
  );
};

export default Store;
