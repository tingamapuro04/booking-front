import React from 'react';
import { useSelector } from 'react-redux';
import CoachForm from './CoachForm';

const Coaches = () => {
  const coaches = useSelector((state) => state.allcoaches.data);
  return (
    <>
      <div>
        {coaches.map((coach) => (
          <div
            className="container shadow-lg bg-body-tertiary border mb-2 pl-2 pt-3 text-bg-light rounded"
            key={coach.id}
          >
            <h1>{coach.name}</h1>
            <p>{coach.description}</p>
            <p>{coach.city}</p>
          </div>
        ))}
      </div>
      <div>
        <h3>Add a new coach</h3>
        <CoachForm />
      </div>
    </>
  );
};

export default Coaches;
