// src/pages/Listings.js
import React, { useState } from 'react';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';

const Listings = () => {
  const [filter, setFilter] = useState('');

  const filteredProperties = properties.filter(p =>
    p.location.toLowerCase().includes(filter.toLowerCase())
    || p.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        value={filter}
        placeholder="Search by city or title"
        onChange={e => setFilter(e.target.value)}
      />
      <div className="property-list">
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Listings;
