import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import DiceGame from './components/DiceGame';
import HowToPlay from './components/HowToPlay';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/game" element={<DiceGame />} />
          <Route path="/how-to-play" element={<HowToPlay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
