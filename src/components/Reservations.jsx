import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReservationData } from '../slices/reservations';
import LoadingSpinner from './LoadingSpinner';

const Reservations = () => {
  const myReservations = useSelector((state) => state.reservations);
  const { status } = myReservations;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservationData());
  }, [dispatch]);

  return (
    <>
      {status === 'loading' && <LoadingSpinner />}
      {status === 'succeeded' && (
        <div className="container text-center mt-5">
          <h3 className="text-decoration-underline mb-5">My Reservations</h3>
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Coach Name</th>
                <th scope="col">Reserved City</th>
                <th scope="col">Reserved Date</th>
              </tr>
            </thead>
            <tbody>
              {myReservations.data.map((reservation, index) => (
                <tr key={reservation.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{reservation.name}</td>
                  <td>{reservation.city}</td>
                  <td>
                    {reservation.date ? reservation.date.slice(0, 10) : ''}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Reservations;
