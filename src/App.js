import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Registration from './components/Registration';
import Home from './components/Home';
import NoPage from './components/NoPage';
import Coaches from './components/Coaches';
import SignUp from './components/SignUp';
import Coach from './components/Coach';
import { getCoachData } from './slices/allSlice';
import ReserveForm from './components/ReserveForm';
import Layout from './components/Layout';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCoachData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/coaches" element={<Coaches />} />
          <Route path="/coaches/:id" element={<Coach />} />
          <Route path="/coaches/:id/reserve" element={<ReserveForm />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
