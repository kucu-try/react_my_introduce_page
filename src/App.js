import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Semi from './Semi';
import Page from './Page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/semi" element={<Semi />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
