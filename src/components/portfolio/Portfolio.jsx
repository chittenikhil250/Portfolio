import React from 'react';
import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'BuyMeACoffee Web3 Clone',
      img: 'https://www.buymeacoffee.com/assets/img/guidelines/download-assets-1.svg',
      link: 'https://buymeacoffe-web3.netlify.app/',
      github: 'https://github.com/chittenikhil250/BuyMeACoffeeWeb3.0',
    }
  ];
  

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
          <div className="portfolio__item-image">
            <img src={pro.img} alt={pro.title} />
          </div>
          <h3>{pro.title}</h3>
          <div className="portfolio__item-cta">
            <a href={pro.github} className="btn">GitHub</a>
            <a href={pro.link} className="btn btn-primary">Live Demo</a>
          </div>
        </article>
        ))}   
      </div>
    </section>
  )
}

export default Portfolio