/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../slices/login';

const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: name,
    };
    console.log(data);
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="username">Username:</label>
      <input
        className="form-control"
        placeholder="Enter your name"
        name="username"
        id="username"
        value={name}
        onChange={(e) => handleChange(e)}
        type="text"
      />
      <input className="btn btn-primary" type="submit" value="Submit" />
    </form>
  );
};

export default Form;
