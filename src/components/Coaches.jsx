import React from 'react';
import { useSelector } from 'react-redux';

const Coaches = () => {
  const coaches = useSelector((state) => state.allcoaches.data);
  return (
    <div>
      {coaches.map((coach) => (
        <div
          className="container shadow-lg border mb-2 pl-2 pt-3 text-bg-light rounded"
          key={coach.id}
        >
          <h1>{coach.name}</h1>
          <p>{coach.description}</p>
          <p>{coach.city}</p>
        </div>
      ))}
    </div>
  );
};

export default Coaches;
