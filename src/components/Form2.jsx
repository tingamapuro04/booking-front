/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../slices/login';

const Form2 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const resetForm = () => {
    setEmail('');
    setPassword('');
    setPasswordConfirmation('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      'http://localhost:3001/registrations',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email,
            password,
            password_confirmation: passwordConfirmation,
          },
        }),
      },
      { withCredentials: true },
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((response) => {
        dispatch(addUser(response.user));
        navigate('/home');
      })
      .catch((error) => console.log(error.message));
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          className="form-control p-2"
          placeholder="Enter your email address"
          name="username"
          id="username"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        <div id="emailHelp" className="form-text">
          We&apos;ll never share your email with anyone else.
        </div>
        <input
          type="password"
          name="password"
          className="form-control p-2"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          name="passwordConfirmation"
          placeholder="Password Confirmation"
          className="form-control p-2"
          value={passwordConfirmation}
          required
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
      </div>
      <input
        className="btn btn-primary mt-3 w-100 p-2"
        type="submit"
        value="SIGN UP"
      />
    </form>
  );
};

export default Form2;
