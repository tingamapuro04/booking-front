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
            path="coaches"
            element={<Coaches />}
          />
          <Route
            path="coaches/:id"
            element={<Coach />}
          />
          <Route
            path="post_coach"
            element={<CoachForm />}
          />
          <Route
            path="coaches/:id/reserve"
            element={<ReserveForm />}
          />
          <Route
            path="remove_coach"
            element={<DeleteCoach />}
          />
          <Route
            path="reservations"
            element={<Reservations />}
          />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
