import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const par = localStorage.getItem('curr_coach') !== null
  ? JSON.parse(localStorage.getItem('curr_coach'))
  : {};

const ReserveForm = () => {
  const currUser = useSelector((state) => state.current_user.data);
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  console.log(currUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/coaches/${par.id}/reservations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        date,
        city,
      }),
    })
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
      className="container d-flex flex-column bg-success-subtle align-items-center justify-content-center"
      style={{ height: '100vh' }}
    >
      <div>
        <h1 className="text-center text-dark">Reserve a Coach</h1>
        <p className="text-center w-75 text-dark m-auto">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ulla
          nulla iure accusantium doloribus,
          officiis ut est autem aliquid natus fugiat eaque ad sit quod?
        </p>
      </div>
      <form className="text-center mt-4 bg-body-secondary p-3 d-flex flex-column w-50" onSubmit={handleSubmit}>
        <input
          className="form-control p-3 mb-3"
          type="text"
          name="city"
          id="city"
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
