// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change Switch to Routes
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import CoursePlanner from './pages/CoursePlanner';
import DegreeProgress from './pages/DegreeProgress';
import WhatIf from './pages/WhatIf';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Dashboard />} /> {/* Use element prop for component */}
        <Route path="/course-planner" element={<CoursePlanner />} />
        <Route path="/degree-progress" element={<DegreeProgress />} />
        <Route path="/what-if" element={<WhatIf />} />
      </Routes>
    </Router>
  );
}

export default App;
