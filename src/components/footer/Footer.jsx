import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa'
import './footer.css';

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">Nikhil Chitte </a>
      <ul className="permalinks">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/nikhil-chitte-b97908219/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/chittenikhil250" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://twitter.com/chitte_nikhil" target="_blank" rel="noreferrer" ><FaTwitter /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; {new Date().getFullYear() }. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer