import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg py-4 fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to='/Home' id='start_framework_anchor'>START FRAMEWORK</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100 d-flex justify-content-end gap-3">
              <li className="nav-item">
                <NavLink className="nav-link rounded" aria-current="page" to='/About'>ABOUT</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link rounded" aria-current="page" to='/Portfolio'>PORTFOLIO</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link rounded" aria-current="page" to='/Contact'>CONTACT</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;