// src/components/Navbar.js
import React from 'react';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className={styles.navbar}>
    <div className={styles.logo}>AmberStudent</div>
    <div className={styles.navLinks}>
      <NavLink to="/" className={({ isActive }) => isActive ? styles.active : undefined}>Home</NavLink>
      <NavLink to="/listings" className={({ isActive }) => isActive ? styles.active : undefined}>Listings</NavLink>
      <NavLink to="/shortlist" className={({ isActive }) => isActive ? styles.active : undefined}>Shortlist</NavLink>
      <NavLink to="/faq" className={({ isActive }) => isActive ? styles.active : undefined}>FAQ</NavLink>
      <NavLink to="/about" className={({ isActive }) => isActive ? styles.active : undefined}>About</NavLink>
    </div>
  </nav>
);

export default Navbar;
