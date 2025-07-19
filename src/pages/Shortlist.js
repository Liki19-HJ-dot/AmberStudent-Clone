// src/pages/Shortlist.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';
import PropertyCard from '../components/PropertyCard';

const Shortlist = () => {
  const { shortlist } = useContext(AuthContext);
  if (!shortlist.length) return <p>No properties saved yet.</p>;

  return (
    <div>
      <h2>My Shortlist</h2>
      <div className="property-list">
        {shortlist.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Shortlist;
