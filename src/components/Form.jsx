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
      <div className="mb-3">
        <input
          className="form-control"
          placeholder="Enter your name"
          name="username"
          id="username"
          value={name}
          onChange={(e) => handleChange(e)}
          type="text"
        />
      </div>
      <input className="btn btn-primary mt-3 w-100" type="submit" value="LOG IN" />
    </form>
  );
};

export default Form;
