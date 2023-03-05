import React from 'react';

const coach = JSON.parse(localStorage.getItem('current_coach'));

const Coach = () => {
  const handleClick = () => {
    localStorage.setItem('curr_coach', JSON.stringify({ id: coach.id }));
    console.log('clicked');
    window.location.href = `http://localhost:3000/coaches/${coach.id}/reserve`;
  };
  return (
    <div>
      <h1>{coach.name}</h1>
      <h1>{coach.id}</h1>
      <p>{coach.description}</p>
      <p>{coach.city}</p>
      <button onClick={handleClick} type="button">Reserve</button>
    </div>
  );
};

export default Coach;
