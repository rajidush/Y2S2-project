import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import EchoTrackLand from './components/EchoTrackLand';
import EchoTrack from './components/EchoTrack';
import EchoTrackForm from './components/EchoTrackForm';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect "/" to "/eco-trackLand" */}
        <Route path="/" element={<Navigate to="/eco-trackLand" />} />
        <Route path="/eco-trackLand" element={<EchoTrackLand />} />
        <Route path="/eco-trackForm" element={<EchoTrackForm />} />
        <Route path="/eco-track" element={<EchoTrack />}/>
      </Routes>
    </Router>
  );
};

export default App;
