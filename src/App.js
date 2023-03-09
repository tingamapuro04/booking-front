import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './components/Registration';
import Home from './components/Home';
import NoPage from './components/NoPage';

import Coaches from './components/Coaches';
import SignUp from './components/SignUp';
import Coach from './components/Coach';
import ReserveForm from './components/ReserveForm';
import Layout from './components/Layout';
import CoachForm from './components/CoachForm';
import DeleteCoach from './components/DeleteCoach';
import Reservations from './components/Reservations';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="https://mentorcoach.netlify.app/coaches"
            element={<Coaches />}
          />
          <Route
            path="https://mentorcoach.netlify.app/coaches/:id"
            element={<Coach />}
          />
          <Route
            path="https://mentorcoach.netlify.app/post_coach"
            element={<CoachForm />}
          />
          <Route
            path="https://mentorcoach.netlify.app/coaches/:id/reserve"
            element={<ReserveForm />}
          />
          <Route
            path="https://mentorcoach.netlify.app/remove_coach"
            element={<DeleteCoach />}
          />
          <Route
            path="https://mentorcoach.netlify.app/reservations"
            element={<Reservations />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
