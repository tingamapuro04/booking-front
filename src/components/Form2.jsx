/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../slices/login';

const Form2 = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const clearField = () => {
    setName('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(name));
    clearField();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <input
          className="form-control p-2"
          placeholder="Enter your name"
          name="username"
          id="username"
          required
          value={name}
          onChange={(e) => handleChange(e)}
          type="text"
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
