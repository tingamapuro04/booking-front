/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Coaches from './Coaches';

const Home = () => {
  const coaches = useSelector((state) => state.allcoaches.data);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <p>Helllo</p>
      {/* <ReserveForm /> */}
      <h1 className="fs-3 fw-bolder">This is where all mentors will go</h1>
      {coaches.length >= 1 && <Coaches />}
      <button className="btn btn-dark" type="button" onClick={handleClick}>
        Go Back
      </button>
    </div>
  );
};

export default Home;
