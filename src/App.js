import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SingleProduct from './components/singleProduct/singelProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} /> {/* SingleProduct*/}
      </Routes>
    </Router>
  );
}

export default App;