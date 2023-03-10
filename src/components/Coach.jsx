/* eslint-disable no-console */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillArrowLeftSquareFill, BsCaretRight } from 'react-icons/bs';

const coach = JSON.parse(localStorage.getItem('current_coach'));

const Coach = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.setItem('curr_coach', JSON.stringify({ id: coach.id }));
    navigate(`/coaches/${coach.id}/reserve`);
  };

  const imgstyle = {
    backgroundImage: `url(${coach.photo})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div
      className="d-flex coach_page flex-column justify-content-center align-items-center"
      style={{ height: '100vh' }}
    >
      <div className="d-flex w-100 px-2">
        <div className="coach_image mx-3 col-5" style={imgstyle} />
        <div className="d-flex pb-3 px-2 flex-column align-items-end">
          <div className="text-center">
            <h4>{coach.name}</h4>
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

          <Link className="text-dark text-decoration-none fs-5" to="/coaches">
            <p className="d-inline">MORE COACHES</p>
            <BsCaretRight />
          </Link>
          <button
            className="btn btn-success mt-3"
            onClick={handleClick}
            type="button"
          >
            Reserve Coach
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-between px-3 w-100 mt-5">
        <button onClick={() => navigate(-1)} className="btn px-3 btn-success" type="button">
          {' '}
          <BsFillArrowLeftSquareFill />
          {' '}
        </button>
      </div>
    </div>
  );
};

export default Coach;
