/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { RiMapPinRangeLine } from 'react-icons/ri';
import './comp1.css';

const Navigation = () => (
  <div className="navigation text-wrap h-100 shadow bg-body rounded">
    <nav className="nav text-wrap ">
      <div className="my-2 reservation w-100 px-1 fs-5">
        <NavLink
          className={({ isActive }) => (`text-decoration-none pt-1 ${isActive ? 'text-success' : 'text-dark'}`)}
          to="/coaches"
        >
          <h6>COACHES</h6>
        </NavLink>
      </div>

      <div className="my-2 reservation w-100 px-1 fs-5 fw-bold">
        <NavLink
          className={({ isActive }) => (`text-decoration-none pt-1 ${isActive ? 'text-success' : 'text-dark'}`)}
          to="/remove_coach"
        >
          <h6>REMOVE COACH</h6>
        </NavLink>
      </div>

      <div className="my-2 reservation w-100 fs-5 px-1 fw-bold">
        <NavLink
          className={({ isActive }) => (`text-decoration-none pt-1 ${isActive ? 'text-success' : 'text-dark'}`)}
          to="/post_coach"
        >
          <h6>ADD COACH</h6>
        </NavLink>
      </div>
      <div className="my-2 reservation d-flex text-wrap fs-5 px-1 fw-bold">
        <NavLink
          className={({ isActive }) => (`text-decoration-none pt-1 ${isActive ? 'text-success' : 'text-dark'}`)}
          to="/reservations"
        >
          <h6 className="text-wrap">RESERVATIONS</h6>
        </NavLink>
      </div>
    </nav>
    <div className="social">
      <Link className="text-dark mx-2" to="https://twitter.com/">
        <BsTwitter className="my-icon" />
      </Link>
      <Link className="text-dark mx-2" to="https://web.facebook.com/?_rdc=1&_rdr">
        <FaFacebookF className="my-icon" />
      </Link>
      <Link className="text-dark mx-2" to="https://www.instagram.com/">
        <RiMapPinRangeLine className="my-icon" />
      </Link>
      {/* <Link className="text-dark mx-2" to="https://www.tiktok.com/en/">
        <FaTiktok className="my-icon" />
      </Link> */}
      <div className="foot">
        <p>&copy; 2023 Microverse</p>
      </div>
    </div>
  </div>
);

export default Navigation;
