import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import TVShows from './pages/Tvshows';
import Music from './pages/Music';
import Transport from './pages/Transport';
import AboutUs from './pages/Aboutus';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/music" element={<Music />} />
          <Route path="/transport" element={<Transport />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
