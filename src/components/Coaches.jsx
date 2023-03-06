/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCoach, navigate } from '../slices/coach';

const Coaches = () => {
  const dispatch = useDispatch();
  const coaches = useSelector((state) => state.allcoaches.data);

  const handleClick = (e) => () => {
    dispatch(addCoach(e));
    navigate(e);
  };

  return (
    <>
      <div className="allCoaches">
        {coaches.map((coach) => (
          <div
            className="container shadow-lg bg-body-tertiary border mb-2 pl-2 pt-3 text-bg-light rounded"
            key={coach.id}
            onClick={handleClick(
              {
                name: coach.name, id: coach.id, description: coach.description, city: coach.city,
              },
            )}
          >
            <h1>{coach.name}</h1>
            <h1>{coach.id}</h1>
            <p>{coach.description}</p>
            <p>{coach.city}</p>
          </div>
        ))}
      </div>
      {/* <div>
        <h3>Add a new coach</h3>
        <CoachForm />
      </div> */}
    </>
  );
};

export default Coaches;
