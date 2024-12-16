import React from 'react';
import { FaEnvelope, FaPhone, FaBuilding, FaMapMarkerAlt, FaLinkedin, FaGlobe } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1 className='text-center mb-5'>Contact</h1>
      <p>
        <FaEnvelope /> E-mail: <a href="mailto:sbselcuklu@erciyes.edu.tr">sbselcuklu@erciyes.edu.tr</a>
      </p>
      <p>
        <FaPhone /> Phone: <a href="tel:+903522076666">(+90) 352 207 6666</a>
      </p>
      <p>
        <FaPhone /> Extension: <a href="tel:32350">32350</a>
      </p>

      <p>
        <FaGlobe /> Related Web Page: <a href="https://avesis.erciyes.edu.tr/sbselcuklu" target="_blank" rel="noopener noreferrer">https://avesis.erciyes.edu.tr/sbselcuklu</a>
      </p>
      <p>
        <FaLinkedin /> LinkedIn: <a href="https://www.linkedin.com/in/sbselcuklu/">sbselcuklu</a>
      </p>
      <p>
        <FaMapMarkerAlt /> Post Address: Erciyes University Faculty of Engineering Energy Systems Engineering 38039 Kayseri, Türkiye
      </p>
      <p>
        <FaBuilding /> Office: E1-112
      </p>
    </div>
  );
};

export default Contact;

