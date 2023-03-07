/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';

const coach = JSON.parse(localStorage.getItem('current_coach'));

const Coach = () => {
  const handleClick = () => {
    localStorage.setItem('curr_coach', JSON.stringify({ id: coach.id }));
    console.log('clicked');
    window.location.href = `http://localhost:3000/coaches/${coach.id}/reserve`;
  };
  return (
    <>
      <div className="d-flex p-5">
        <div className="coach_image">
          <img src={coach.photo} alt="Coach image" />
        </div>
        <div className="d-flex flex-column align-items-end">
          <div className="text-end">
            <p>{coach.name}</p>
            <p>{coach.description}</p>
          </div>

          <div className="d-flex justify-content-around bg-body-secondary w-100 align-items-end">
            <p className="mt-3 p-0">Mentor Fee:</p>
            <p>$500</p>
          </div>

          <div className="d-flex justify-content-around w-100 align-items-end">
            <p className="mt-3 p-0">Duration:</p>
            <p>1 hour</p>
          </div>
          <div className="d-flex justify-content-around bg-body-secondary w-100 align-items-end">
            <p className="mt-3 p-0">Mentor Availability:</p>
            <p>Available</p>
          </div>
          <div className="d-flex justify-content-around  w-100 align-items-end">
            <p className="mt-3 p-0">Origin:</p>
            <p>Economics</p>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-between px-5">
        <button className="btn p-3 btn-success" type="button">
          {' '}
          <BsFillArrowLeftSquareFill />
          {' '}
        </button>
        <button className="btn btn-success" onClick={handleClick} type="button">
          Reserve
        </button>
      </div>
    </>
  );
};

export default Coach;
