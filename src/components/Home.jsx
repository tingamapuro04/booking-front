import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1 className="fs-3 fw-bolder">This is where all mentors will go</h1>
      <button className="btn btn-dark" type="button" onClick={handleClick}>Go Back</button>
    </div>
  );
};

export default Home;
