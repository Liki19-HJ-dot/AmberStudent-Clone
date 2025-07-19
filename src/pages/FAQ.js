// src/pages/FAQ.js
import React from 'react';

const faqs = [
  { question: "How do I book a room?", answer: "Sign up, search for your city, shortlist a property, and book online." },
  { question: "Is my payment secure?", answer: "Yes, all payments are securely processed through trusted gateways." },
  // Add more FAQs as needed
];

const FAQ = () => (
  <div>
    <h2>Frequently Asked Questions</h2>
    <ul>
      {faqs.map((faq, i) => (
        <li key={i}>
          <strong>{faq.question}</strong>
          <p>{faq.answer}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default FAQ;
