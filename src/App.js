import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Pages/tenant/signup/Signup';
import Signin from './Pages/tenant/signin/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signin/>} />
        <Route path="/login" element={<Signin />} />/
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
