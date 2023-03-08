import React from 'react';
import Login from './Login';
import ShortDesc from './ShortDesc';

const Registration = () => (
  <div
    className="container mt-4 w-75 m-auto d-flex justify-content-center align-items-center"
    style={{ height: '100vh' }}
  >
    <div className="d-flex">
      <Login />
      <ShortDesc />
    </div>
  </div>
);

export default Registration;
