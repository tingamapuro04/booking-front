/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './coach.css';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { TfiGoogle } from 'react-icons/tfi';
import { addCoach } from '../slices/coach';
import { getCoachData } from '../slices/allSlice';

const Coaches = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const coaches = useSelector((state) => state.allcoaches.data);

  const handleWheel = (event) => {
    const container = event.currentTarget;
    if (!container) return;
    const delta = Math.sign(event.deltaY);
    const distance = 500;

    container.scrollLeft += delta * distance;
  };

  const handleClick = (e) => () => {
    dispatch(addCoach(e));
    navigate(`/coaches/${e.id}`);
    window.location.reload();
  };

  useEffect(() => {
    dispatch(getCoachData());
  }, [coaches, dispatch]);

  return (
    <>
      <div className="allCoaches">
        <h1 className="head">MOST POPULAR COACHES</h1>
        <p>Please pick Ⰶ a coach 🐬 of your choice 🇧🇷︎ ♥️</p>
        <div className="tile" onWheel={handleWheel}>
          {coaches
            && coaches.map((coach) => (
              <div
                className="oneCoach"
                key={coach.id}
                onClick={handleClick({
                  name: coach.name,
                  id: coach.id,
                  description: coach.description,
                  photo: coach.image,
                })}
              >
                <img className="coachImg" src={coach.image} alt="Coach image" />
                <h2 className="coachName mt-3">{coach.name}</h2>
                <p className="coachdesc">{coach.description}</p>
                <div>
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
    </>
  );
};

export default Coaches;
