import React from 'react';
import Form from './Form';

const Login = () => (
  <div className="container text-bg-light d-flex flex-column align-items-center">
    <h1 className="mt-5 mb-4">We are the We_Mentor Group</h1>
    <p className="fw-normal fs-4">Please login to your account</p>
    <br />
    <Form />
    <div className="container mt-5 d-flex justify-content-evenly align-items-center">
      <p className="fs-4">Dont Have an account yet?</p>

      <a href="http://localhost:3000/" className="link-info fs-4">
        Sign Up
      </a>
    </div>
  </div>
);

export default Login;
