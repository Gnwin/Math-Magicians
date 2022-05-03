import React from 'react';
import { Routes, Route } from 'react-router-dom';

import '../../assets/stylesheets/App.css';
import Navigation from './Navigation';
import Home from './Home';
import CalculatorPage from './CalculatorPage';
import Quote from './Quote';

const App = () => (
  <div className="appwidth">
    <div className="header">
      <Navigation />
    </div>

    <div className="main">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="quote" element={<Quote />} />
      </Routes>
    </div>
  </div>
);

export default App;
