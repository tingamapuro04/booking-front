/* eslint-disable no-console */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './coach.css';

const par = localStorage.getItem('curr_coach') !== null
  ? JSON.parse(localStorage.getItem('curr_coach'))
  : {};

const currUser = JSON.parse(localStorage.getItem('curr_user'));

const ReserveForm = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://booking-app-7i9f.onrender.com/api/v1/coaches/${par.id}/reserves`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('user'))}`,
        },
        body: JSON.stringify({
          date,
          city,
        }),
      },
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(() => {
        navigate(-1);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div
      className="container Reservation d-flex flex-column bg-success-subtle align-items-center justify-content-center"
      style={{ height: '100vh' }}
    >
      <div>
        <h1 className="text-center text-dark">Reserve a Coach</h1>
        <p className="text-center w-75 text-dark m-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ulla nulla
          iure accusantium doloribus, officiis ut est autem aliquid natus fugiat
          eaque ad sit quod?
        </p>
      </div>
      <form
        className="text-center mt-4 bg-body-secondary p-3 d-flex flex-column w-50"
        onSubmit={handleSubmit}
      >
        <input
          className="form-control p-3 mb-3"
          type="text"
          name="username"
          id="username"
          defaultValue={currUser.username ? currUser.username : ''}
          placeholder={currUser.username ? currUser.username : 'Username'}
        />
        <input
          className="form-control p-3 mb-3"
          type="text"
          name="city"
          id="city"
          required
          value={city}
          placeholder="Select City of Reservation"
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          className="form-control p-3 mb-3"
          type="date"
          name="date"
          id="date"
          value={date}
          required
          placeholder="Select Date of Reservation"
          onChange={(e) => setDate(e.target.value)}
        />
        <button type="submit" className="btn btn-primary">
          Reserve
        </button>
      </form>
    </div>
  );
};

export default ReserveForm;
