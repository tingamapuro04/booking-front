/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Link } from 'react-router-dom';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';
import { TfiGoogle } from 'react-icons/tfi';
import { RiMapPinRangeLine } from 'react-icons/ri';
import './comp1.css';

const Navigation = () => (
  <div className="navigation">
    <nav className="nav">
      <div>
        <Link className="nav_link" to="/coaches">
          COACHES
        </Link>
      </div>

      <div>
        <Link className="nav_link" to="/home">
          HOME
        </Link>
      </div>

      <div>
        <Link className="nav_link" to="/coaches/post_coach">
          ADD COACH
        </Link>
      </div>
    </nav>
    <div className="social">
      <BsTwitter className="my-icon" />
      <FaFacebookF className="my-icon" />
      <TfiGoogle className="my-icon" />
      <RiMapPinRangeLine className="my-icon" />
      <FaTiktok className="my-icon" />
      <div className="foot">
        <p>&copy; 2023 Microverse</p>
      </div>
    </div>
  </div>
);

export default Navigation;
