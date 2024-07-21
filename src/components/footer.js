import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-center py-4">
      <h1 className="font-poppins font-semibold text-white text-base">WIE KAUFT MAN BITCOIN?</h1>
      <a 
        href="/impressum" 
        className="text-blue-500 hover:underline block mt-2"
      >
        Impressum
      </a>
    </footer>
  );
};

export default Footer;
