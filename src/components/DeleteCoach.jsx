import React from 'react';
import { useSelector } from 'react-redux';
import './coach.css';

const DeleteCoach = () => {
  const coaches = useSelector((state) => state.allcoaches.data);
  const handleDelete = (id) => {
    fetch(
      `https://booking-app-7i9f.onrender.com/api/v1/coaches/${id}}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JSON.parse(localStorage.getItem('user'))}`,
        },
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
        console.log('deleted');
      })
      .catch((response) => console.log(response));
  };
  return (
    <div className="d-flex flex-column">
      {coaches.map((coach) => (
        <div
          className="tile1 bg-body-secondary shadow-md mx-3 mb-2 d-flex justify-content-between px-2 align-items-center"
          key={coach.id}
        >
          <h6>{coach.name}</h6>
          <button onClick={() => handleDelete(coach.id)} className="btn1 btn-danger" type="button">
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default DeleteCoach;
