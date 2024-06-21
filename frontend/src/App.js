import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import BeespokeLogo from './BeespokeLogo.JPG';
import Banner from './Banner.png';
import Ties from './components/Ties';
import Home from './components/Home';
import Accessories from './components/Accessories';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={Banner} className="" alt="Banner-main" />
        </header>
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/ties" element={<Ties />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
