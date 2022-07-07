import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src="https://pbs.twimg.com/profile_images/1541853796393193472/TyN3H1zQ_400x400.jpg" alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>Intern at  <a href="https://rivach.com/" target='_blank' rel='noreferrer'> Rivach</a></small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>2 Completed Projects</small>
            </article>
          </div>
          <p>I’ve been working with React, Next Js, Node Js building everything from landing pages to API's. My experience as an intern helped me collaborate with fellow developers and learn new concepts. Recently I've shifted my focus on building dapps and writing smart contracts.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro