/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleChange = (e) => {
  //   setName(e.target.value);
  // };

  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      'http://localhost:3001/sessions',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user: {
            email,
            password,
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
      .then(() => {
        // handleSuccessfulAuth(response);
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
