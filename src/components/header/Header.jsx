import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';


const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello, I am</h5>
        <h1>Nikhil Chitte </h1>
        <h3 className="text-light">
        Full Stack Developer || Web3 Enthusiast 
        </h3>
        <CTA />
        <a href="#contact" className="scroll__down">Scroll Down</a>
        <HeaderSocials />
      </div>
    </header>
  )
}

export default Header