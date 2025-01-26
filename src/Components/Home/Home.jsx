import React from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import avataaars from './../../assets/avataaars.png';

const Home = () => {
  return (
    <>
      <section className='d-flex align-items-center justify-content-center flex-column py-4' id='home_sec'>
        <img src={avataaars} alt="person" className='mb-5'/>
        <h1 className='text-white'>START FRAMEWORKssss</h1>
        <div class='d-flex align-items-center gap-3'>
        <span className='star_lines1'></span>
        <FontAwesomeIcon icon={faStar} className='text-white' />
        <span className='star_lines1'></span>
        </div>
        <span className='text-white mt-3'>Graphic Artist - Web Designer - Illustrator</span>
      </section>
    </>
  );
};

export default Home;