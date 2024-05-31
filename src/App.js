import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import Semi from './Semi';
import Page from './Page';
import News from './News';
import Fairy from './Fairy';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/semi" element={<Semi />} />
        <Route path="/news" element={<News />} />
        <Route path="/fairy" element={<Fairy />} />
        <Route path="/page" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
