import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Registration from './components/Registration';
import Home from './components/Home';
import NoPage from './components/NoPage';
import SignUp from './components/SignUp';
import { getCoachData } from './slices/allSlice';
import { getUserData } from './slices/login';

function App() {
  // const checkLoginStatus = () => {
  //   fetch('http://localhost:3001/logged_in', {
  //     withCredentials: true,
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error('Network response was not ok.');
  //     })
  //     .then((response) => {
  //       if (response.logged_in) {
  //         console.log(response);
  //         // setUser(response.user);
  //       } else if (!response.logged_in) {
  //         console.log('Not logged in');
  //         setUser({});
  //       }
  //     })
  //     .catch((error) => console.log(error.message));
  // };

  // useEffect(() => {
  //   checkLoginStatus();
  // }, []);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserData());
    dispatch(getCoachData());
  }, [dispatch]);

  // checkLoginStatus();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
