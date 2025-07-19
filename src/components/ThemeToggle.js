// src/components/ThemeToggle.js
import React from 'react';

const ThemeToggle = () => {
  const toggleTheme = () => {
    document.body.classList.toggle('dark');
  };
  return (
    <button onClick={toggleTheme}>
      Toggle {document.body.classList.contains('dark') ? 'Light' : 'Dark'} Mode
    </button>
  );
};
export default ThemeToggle;
