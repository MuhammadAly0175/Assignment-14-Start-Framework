import React from 'react';
import './about.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <>
      <section className='text-white py-4 d-flex align-items-center' id='about_sec'>
        <div className="container d-flex flex-column align-items-center justify-content-center">
          <h1>ABOUT COMPONENT</h1>
          <div className='d-flex align-items-center gap-3 mb-3 mt-2'>
            <div className='star_lines1'></div>
            <FontAwesomeIcon icon={faStar} className='text-white' />
            <div className='star_lines1'></div>
          </div>
          <div className='d-flex gap-4 px-5'>
            <p>Freelancer is a free bootstrap theme created by Route.
              The download includes the complete source files including
              HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            <p>Freelancer is a free bootstrap theme created by Route.
              The download includes the complete source files including
              HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </section>
    </>
  )
};

export default About;