import React from 'react';
import About from '../Components/About/About';
import ContactPage from '../Components/Contact/Contact';
import Home from '../Components/Home/Home'
import Portfolio from '../Components/Portfolio/Portfolio'


function MainPage() {
  return (
    <>
      <Home />
      <section id="about"><About /></section>
      <section id="portfolio"><Portfolio /></section>
      <section id="contact"><ContactPage /></section>
    </>
  );
}

export default MainPage;