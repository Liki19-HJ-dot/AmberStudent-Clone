import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.content}>
      <div className={styles.section}>
        <div className={styles.logo}>AmberStudent</div>
        <div className={styles.tagline}>
          Find your student home, effortlessly.
        </div>
      </div>
      <div className={styles.section}>
        <div className={styles.linksTitle}>Quick Links</div>
        <nav className={styles.links}>
          <Link to="/">Home</Link>
          <Link to="/listings">Listings</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
      <div className={styles.section}>
        <div className={styles.linksTitle}>Legal</div>
        <nav className={styles.links}>
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
        </nav>
      </div>
    </div>
    <div className={styles.bottom}>
      <div>© {new Date().getFullYear()} AmberStudent. All rights reserved.</div>
      <div className={styles.socials}>
        <a href="https://facebook.com/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <img src="https://raw.githubusercontent.com/RzayevTaleh01/Responsive_Portfolio/81c98115a4b690e0aefbaf422b7ef1213679980b/img/fb.svg" alt="Facebook" />
        </a>
        <a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
          <img src="https://raw.githubusercontent.com/RzayevTaleh01/Responsive_Portfolio/81c98115a4b690e0aefbaf422b7ef1213679980b/img/twitter.svg" alt="Twitter" />
        </a>
        <a href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <img src="https://raw.githubusercontent.com/RzayevTaleh01/Responsive_Portfolio/81c98115a4b690e0aefbaf422b7ef1213679980b/img/insta.svg" alt="Instagram" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
