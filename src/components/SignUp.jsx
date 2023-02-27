import React from 'react';
import Form2 from './Form2';
// import ShortDesc from './ShortDesc';

const SignUp = () => (
  <div className="container text-center  bg-secondary-subtle w-50 mt-5 p-4">
    <h1>Welcome To MenteMentor</h1>
    <p>Please sign up to get your mentor today</p>
    <div className="w-50 mx-auto my-5">
      <Form2 />
    </div>
  </div>
);

export default SignUp;
