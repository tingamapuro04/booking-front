import React from 'react';

const coach = JSON.parse(localStorage.getItem('current_coach'));

const Coach = () => (
  <div>
    <h1>{coach.name}</h1>
    <h1>{coach.id}</h1>
    <p>{coach.description}</p>
    <p>{coach.city}</p>
  </div>
);

export default Coach;
