import React from 'react';
import './comp2.css';

const ShortDesc = () => (
  <div
    className="container d-none welcome text-wrap overflow-hidden p-4 text-center p-3 mb-2 bg-danger text-white"
    style={{ height: '90vh' }}
  >
    <h1 className="fw-bolder">Welcome</h1>
    <p className="fw-light text-wrap w-75 fs-2 m-auto">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis quidem
      commodi cum quae, ab, laboriosam architecto exercitationem
    </p>
  </div>
);

export default ShortDesc;
