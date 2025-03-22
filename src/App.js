import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import SingleProduct from './components/singleProduct/singelProduct';
import Layout from './components/Layout/Layout';
import Form from './components/contact-us/Form';
import Cart from './components/cart/Cart';
import { CartProvider } from './components/cart/CartContext';

function RouteNotFound() {
  return <div>Page not found</div>;
}

function App() {
  return (
    <CartProvider>
    <Router>
     <Layout> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<SingleProduct />} /> {/* SingleProduct*/}
        <Route path="/form" element={<Form />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<RouteNotFound />} />
      </Routes>
     </Layout>
    </Router>
    </CartProvider>
  );
}

export default App;