import React from 'react'
import './portfolio.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons';
import poert1 from './../../assets/poert1.png';
import port2 from './../../assets/port2.png';
import port3 from './../../assets/port3.png';

const Portfolio = () => {
  return (
    <>
      <section className='py-4' id='portfolio_sec'>
        <div className="container d-flex flex-column align-items-center text-center">
          <h1>PORTFOLIO COMPONENT</h1>
          <div className='d-flex align-items-center gap-3 mb-3 mt-2'>
            <div className='star_lines2'></div>
            <FontAwesomeIcon icon={faStar} id='star_icon' />
            <div className='star_lines2'></div>
          </div>
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-4 px-4 position-relative'>
              <img src={poert1} className='img-fluid rounded gallery_img' />
              <div className='layer mx-4 d-flex align-items-center justify-content-center' data-bs-toggle="modal" data-bs-target="#Modal1" >
                <FontAwesomeIcon icon={faPlus} className='text-white plus_icon' />
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 px-4 position-relative'>
              <img src={port2} className='img-fluid rounded gallery_img' />
              <div className='layer mx-4 d-flex align-items-center justify-content-center' data-bs-toggle="modal" data-bs-target="#Modal2">
                <FontAwesomeIcon icon={faPlus} className='text-white plus_icon' />
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 px-4 position-relative'>
              <img src={port3} className='img-fluid rounded gallery_img' />
              <div className='layer mx-4 d-flex align-items-center justify-content-center' data-bs-toggle="modal" data-bs-target="#Modal3">
                <FontAwesomeIcon icon={faPlus} className='text-white plus_icon' />
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 px-4 mt-5 position-relative'>
              <img src={poert1} className='img-fluid rounded gallery_img' />
              <div className='layer mx-4 d-flex align-items-center justify-content-center' data-bs-toggle="modal" data-bs-target="#Modal1">
                <FontAwesomeIcon icon={faPlus} className='text-white plus_icon' />
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 px-4 mt-5 position-relative'>
              <img src={port2} className='img-fluid rounded gallery_img' />
              <div className='layer mx-4 d-flex align-items-center justify-content-center' data-bs-toggle="modal" data-bs-target="#Modal2">
                <FontAwesomeIcon icon={faPlus} className='text-white plus_icon' />
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-4 px-4 mt-5 position-relative'>
              <img src={port3} className='img-fluid rounded gallery_img' />
              <div className='layer mx-4 d-flex align-items-center justify-content-center' data-bs-toggle="modal" data-bs-target="#Modal3">
                <FontAwesomeIcon icon={faPlus} className='text-white plus_icon' />
              </div>
            </div>
          </div>
        </div>
        <div class="modal" id="Modal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <img src={poert1} className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
        <div class="modal" id="Modal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <img src={port2} className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
        <div class="modal" id="Modal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-body">
                <img src={port3} className='img-fluid' />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio