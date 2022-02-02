import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Home from './pages/Home';
import KeyFeatures from './pages/KeyFeatures';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import Demo from './pages/Demo';
import './App.css';

function App() {
  return (
    <div className="header-box">
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/features' element={<KeyFeatures />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/testimonials' element={<Testimonials />} />
          <Route path='/demo' element={<Demo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
