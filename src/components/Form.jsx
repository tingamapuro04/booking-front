/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './comp2.css';

const Form = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setUsername('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      'https://booking-app-7i9f.onrender.com/api/v1/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
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
        localStorage.setItem('user', JSON.stringify(response.token));
        localStorage.setItem('curr_user', JSON.stringify({ username }));
        navigate('/coaches');
      })
      .catch((error) => console.log(error.message));
    resetForm();
  };

  return (
    <form className="login_form" onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          className="form-control p-2 mb-2"
          placeholder="Enter your user name"
          name="username"
          id="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <input
          type="password"
          name="password"
          className="form-control p-2"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <input
        className="btn btn-primary mt-3 w-100 p-2"
        type="submit"
        value="LOGIN"
      />
    </form>
  );
};

export default Form;
