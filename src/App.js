import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SingleProduct from './components/singleProduct/singelProduct';
import Layout from './components/Layout/Layout';
import Form from './components/contact-us/Form';

function RouteNotFound() {
  return <div>Page not found</div>;
}

function App() {
  return (
    <Router>
     <Layout> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} /> {/* SingleProduct*/}
        <Route path="/form" element={<Form />} /> {/* Add route for Form */}
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
     </Layout>
    </Router>
  );
}

export default App;