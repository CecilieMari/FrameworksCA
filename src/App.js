import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SingleProduct from './components/singleProduct/singelProduct';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <Router>
     <Layout> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} /> {/* SingleProduct*/}
      </Routes>
     </Layout>
    </Router>
  );
}

export default App;