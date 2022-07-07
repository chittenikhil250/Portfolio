import React from 'react';
import CV from '../../assets/cv.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">Download CV</a>
      <a href="https://github.com/chittenikhil250" target="_blank" rel="noreferrer" className="btn btn-primary">View on GitHub </a>
    </div>
  )
}

export default CTA