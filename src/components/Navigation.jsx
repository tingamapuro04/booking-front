/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { RiMapPinRangeLine } from 'react-icons/ri';
import { ImSwitch } from 'react-icons/im';
import { TfiGoogle } from 'react-icons/tfi';
import './comp1.css';

const Navigation = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const LogOut = () => {
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <div className="navigation text-wrap">
      <nav className="nav text-wrap">
        <div className="mb-1 reservation w-100 main_link px-3 fs-5 fw-bold">
          <NavLink
            className=" text-decoration-none text-white"
            to="/coaches"
          >
            COACHES
          </NavLink>
        </div>

        <div className="mb-1 reservation w-100 px-3 fs-5 fw-bold">
          <Link className="text-decoration-none text-dark" to="/remove_coach">
            REMOVE COACH
          </Link>
        </div>

        <div className="mb-1 reservation w-100 fs-5 px-3 fw-bold">
          <Link
            className="text-decoration-none text-dark"
            to="/coaches/post_coach"
          >
            ADD COACH
          </Link>
        </div>
        <div className="mb-1 reservation d-flex text-wrap fs-5 px-3 fw-bold">
          <Link
            className="text-decoration-none reservation text-wrap text-dark"
            to="/reservations"
          >
            <p className="text-wrap">RESERVATIONS</p>
          </Link>
        </div>
        <div className="mb-1 reservation d-flex text-wrap fs-5 px-3 fw-bold">
          {
          user ? (
            <button onClick={() => LogOut()} className="logout " type="button">
              LOGOUT
              {' '}
              <ImSwitch className="m-2" />
              {' '}
            </button>
          ) : ''
        }

        </div>
      </nav>
      <div className="social">
        <Link className="text-dark" to="https://twitter.com/">
          <BsTwitter className="my-icon" />
        </Link>
        <Link className="text-dark" to="https://web.facebook.com/?_rdc=1&_rdr">
          <FaFacebookF className="my-icon" />
        </Link>
        <Link className="text-dark" to="https://www.google.com/">
          <TfiGoogle className="my-icon" />
        </Link>
        <Link className="text-dark" to="https://www.instagram.com/">
          <RiMapPinRangeLine className="my-icon" />
        </Link>
        <Link className="text-dark" to="https://www.tiktok.com/en/">
          <FaTiktok className="my-icon" />
        </Link>
        <div className="foot">
          <p>&copy; 2023 Microverse</p>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
