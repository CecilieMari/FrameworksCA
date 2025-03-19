import React from 'react';
import styles from './Layout.module.css';
import Nav from '../nav/Nav';
import Footer from '../Footer/Footer';

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;