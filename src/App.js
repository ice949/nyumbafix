import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Pages/tenant/signup/Signup';
import Signin from './Pages/tenant/signin/Signin';
import ReportIssue from './Pages/tenant/report_issue/ReportIssue';
import Rating from './Pages/tenant/rating/Rating';
import Feedback from './Pages/tenant/feedback/Feedback';
import Landing from './Pages/tenant/landing_page/Landing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Signin />} />/
        <Route path="/signup" element={<Signup />} />
        <Route path="/report-issue" element={<ReportIssue />} />
        <Route path="/rating" element={<Rating />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
