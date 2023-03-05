import React from 'react';
import { useSelector } from 'react-redux';

const par = localStorage.getItem('curr_coach') !== null
  ? JSON.parse(localStorage.getItem('curr_coach'))
  : {};

const ReserveForm = () => {
  const currUser = useSelector((state) => state.current_user.data);
  const userId = currUser.id;
  const userEmail = currUser.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `http://localhost:3001/coaches/${par.id}/reservations`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reservation: {
            user: userId,
            username: userEmail,
          },
        }),
      },
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="curr_user"
          id="curr_user"
          defaultValue={currUser.id}
          placeholder={currUser.email}
        />

        <input
          type="text"
          name="name"
          id="name"
          defaultValue={currUser.email}
          placeholder={currUser.email}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReserveForm;
