// src/components/PropertyCard.js
import React, { useContext } from 'react';
import styles from './PropertyCard.module.css';
import { AuthContext } from '../context/AuthProvider';

const PropertyCard = ({ property }) => {
  const { user, shortlist, setShortlist } = useContext(AuthContext);

  const isShortlisted = user && shortlist.some(item => item.id === property.id);

  const toggleShortlist = () => {
    if (!user) return alert("Please log in to save properties.");
    setShortlist(prev =>
      isShortlisted
        ? prev.filter(item => item.id !== property.id)
        : [...prev, property]
    );
  };

  return (
    <div className={styles.card}>
      <img src={property.image} alt={property.title} className={styles.image} />
      <div className={styles.details}>
        <div className={styles.title}>{property.title}</div>
        <div className={styles.location}>{property.location}</div>
        <div className={styles.price}>£{property.price} per week</div>
        <button className={styles.button} onClick={toggleShortlist}>
          {isShortlisted ? "Remove from Shortlist" : "Shortlist"}
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
