/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../slices/login';

const Form = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const userName = JSON.parse(localStorage.getItem('username'));

  const handleSubmit = (e) => {
    e.preventDefault();
    const formError = {};

    if (name !== userName.username && userName !== null) {
      formError.name = 'Username does not match!!';
    }

    setErrors(formError);
    if (Object.keys(formError).length === 0) {
      // Submit form
      dispatch(login(name));
      navigate('/home');
    }
    // const data = {
    //   username: name,
    // };
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter your name"
          name="username"
          id="username"
          required
          value={name}
          onChange={(e) => handleChange(e)}
          type="text"
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <input
        className="btn btn-primary mt-3 w-100"
        type="submit"
        value="LOG IN"
      />
    </form>
  );
};

export default Form;
