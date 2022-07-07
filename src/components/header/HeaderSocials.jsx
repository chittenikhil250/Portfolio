import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/nikhil-chitte-b97908219/" target="_blank" rel="noreferrer" ><BsLinkedin /></a>
      <a href="https://github.com/chittenikhil250" target="_blank" rel="noreferrer" ><FaGithub /></a>
      <a href="https://twitter.com/chitte_nikhil" target="_blank" rel="noreferrer" ><FaTwitter /></a>
    </div>
  )
}

export default HeaderSocials