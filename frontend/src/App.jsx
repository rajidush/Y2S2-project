import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import EchoTrackLand from './components/EchoTrackLand';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Redirect "/" to "/eco-trackLand" */}
        <Route path="/" element={<Navigate to="/eco-trackLand" />} />
        <Route path="/eco-trackLand" element={<EchoTrackLand />} />
      </Routes>
    </Router>
  );
};

export default App;
