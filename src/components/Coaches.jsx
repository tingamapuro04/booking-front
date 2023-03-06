/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './coach.css';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { TfiGoogle } from 'react-icons/tfi';
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
        <h1>MOST POPULAR COACHES</h1>
        <p>Please one your choice</p>
        <div className="tile">
          {coaches.map((coach) => (
            <div
              className="oneCoach"
              key={coach.id}
              onClick={handleClick({
                name: coach.name,
                id: coach.id,
                description: coach.description,
                city: coach.city,
              })}
            >
              <h1>{coach.name}</h1>
              <h1>{coach.id}</h1>
              <p>{coach.description}</p>
              <p>{coach.city}</p>
              <div>
                <p>
                  Hello, I am
                  {' '}
                  {coach.name}
                  {' '}
                  from
                  {' '}
                  {coach.city}
                  {' '}
                  and I would be so
                  happy to be your coach
                </p>
                <div>
                  <BsTwitter className="my-icon" />
                  <FaFacebookF className="my-icon" />
                  <TfiGoogle className="my-icon" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div>
        <h3>Add a new coach</h3>
        <CoachForm />
      </div> */}
    </>
  );
};

export default Coaches;
