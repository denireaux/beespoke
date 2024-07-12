import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Accessories from './components/Accessories';
import RSVP from './components/RSVP';
import Mead from './components/Mead';
import TiesList from './components/TieList';
import TieDetail from './components/TieDetail';
import Register from './components/Register';
import Login from './components/Login';
import './App.css';

const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return null;
};

const App = () => {
  return (
    <Router>
      <div>
        <HeroSection />
        <ScrollToHashElement />
        <Routes>
          <Route path="/" exact component={HeroSection} />
          <Route path="/about" element={<About />} />
          <Route path="/accessories/" element={<Accessories />} />
          <Route path="/accessories/ties" element={<TiesList />} />
          <Route path="/accessories/ties/:id" element={<TieDetail />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/mead" element={<Mead />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
