/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './coach.css';

const CoachForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [city, setCity] = useState('');
  const [image, setImage] = useState('');

  const resetForm = () => {
    setName('');
    setDescription('');
    setCity('');
    setImage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      'https://booking-app-7i9f.onrender.com/api/v1/coaches',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('user'))}`,
        },
        body: JSON.stringify({
          name,
          description,
          image,
          city,
        }),
      },
      { withCredentials: true },
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        console.log(response);
        throw new Error('Network response was not ok.');
      })
      .then(() => {
        window.location.reload();
      })
      .catch((response) => console.log(response));
    resetForm();
    navigate('/coaches');
  };

  return (
    <div className="w-75 mx-auto coachForm">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Coach Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            className="form-control w-100 border border-dark-subtle"
            id="exampleInputEmail1"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            type="text"
            className="form-control border border-dark-subtle"
            id="description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            Coach Image
          </label>
          <input
            onChange={(e) => setImage(e.target.value)}
            value={image}
            type="text"
            className="form-control border border-dark-subtle"
            id="city"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="form-label">
            Coach City
          </label>
          <input
            onChange={(e) => setCity(e.target.value)}
            value={city}
            type="text"
            className="form-control border border-dark-subtle"
            id="inputGroupFile02"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Coach
        </button>
      </form>
    </div>
  );
};

export default CoachForm;
