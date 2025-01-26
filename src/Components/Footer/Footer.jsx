import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter, } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <>
      <section id='footer_section'>
        <div className="container d-flex justify-content-around text-center text-white">
          <div className='footer_card'>
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className='footer_card'>
            <h3>AROUND THE WEB</h3>
            <FontAwesomeIcon icon={faFacebookF} className='footer_icons fa-fw rounded-circle border border-1 border-white' />
            <FontAwesomeIcon icon={faTwitter} className='footer_icons fa-fw rounded-circle border border-1 border-white' />
            <FontAwesomeIcon icon={faLinkedinIn} className='footer_icons fa-fw rounded-circle border border-1 border-white' />
            <FontAwesomeIcon icon={faGlobe} className='footer_icons fa-fw rounded-circle border border-1 border-white' />
          </div>
          <div className='footer_card'>
            <h3>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </section>
      <section className='text-white text-center py-4' id='footer2'>
        Copyright © Your Website 2021
      </section>
    </>
  );
};

export default Footer;