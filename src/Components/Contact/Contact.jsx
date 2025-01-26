import React from 'react';
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <>
      <section id='contact_sec' class='py-4'>
        <div className="container d-flex flex-column align-items-center">
          <h1>CONTACT SECTION</h1>
          <div className='d-flex align-items-center gap-3 mb-3 mt-2'>
            <div className='star_lines2'></div>
            <FontAwesomeIcon icon={faStar} id='star_icon' />
            <div className='star_lines2'></div>
          </div>
          <form>
            <input type="text" placeholder='userName' className="form-control my-5" />
            <input type="number" placeholder='userAge' className="form-control mb-5" />
            <input type="email" placeholder='userEmail' className="form-control mb-5" />
            <input type="password" placeholder='userPassword' className="form-control mb-5" />
            <button type="submit" class="btn text-white mb-5">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;