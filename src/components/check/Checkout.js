import React from 'react';
import styles from './checkout.module.css';
import { useNavigate } from 'react-router-dom';
  
function Checkout() {  
    const navigate = useNavigate();

    const home = () => {
        navigate ('/');
    };

  return (
    <div className={styles.checkout}>
      <h1>Thank you for your purchase!</h1>
      <p>Your order has been successfully placed. We will contact you soon.</p>
      <button onClick={home} className={styles.homeButton}> Home </button>
    </div>
   
  );
} 

export default Checkout;