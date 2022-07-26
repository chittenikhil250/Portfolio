import React from 'react';
import CV from '../../assets/resume.docx';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} className="btn">Download CV</a>
      <a href="https://github.com/chittenikhil250" target="_blank" rel="noreferrer" className="btn btn-primary">View on GitHub </a>
    </div>
  )
}

export default CTA