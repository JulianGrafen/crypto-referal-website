import React from 'react';
import { Link } from 'react-router-dom'; // Falls Sie React Router verwenden


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center py-4">
      <h1 className="font-poppins font-semibold text-white text-base">WIE KAUFT MAN BITCOIN?</h1>
      <Link to="/impressum" className="text-lg font-semibold hover:text-gray-400">Home</Link>
        Impressum
    </footer>
  );
};

export default Footer;
