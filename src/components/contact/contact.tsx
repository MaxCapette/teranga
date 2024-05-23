// pages/contact.tsx
"use client";
import React from 'react';
import FormContact from './formcontact';
import "./contact.css";

const ContactPage: React.FC = () => {
  return (
    <div className="container">
      <h2>Contactez-nous</h2>
      <FormContact />
    </div>
  );
};

export default ContactPage;
