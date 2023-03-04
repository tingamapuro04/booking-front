import React from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';

const Login = () => (
  <div className="container text-bg-light d-flex flex-column align-items-center">
    <h1 className="mt-5 mb-4">We are the @@Group</h1>
    <p className="fw-normal fs-4">Please login to your account</p>
    <br />
    <Form />
    <div className="container mt-5 d-flex justify-content-evenly align-items-center">
      <p className="fs-4">Dont Have an account yet?</p>

      <Link to="/signup">SIGN UP</Link>
    </div>
  </div>
);

export default Login;
