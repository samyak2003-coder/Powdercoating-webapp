import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
// import Link from 'next/link';

const Contact = () => {
  return (
    <a href="/#contact">
      <div className="flex items-center px-4 py-2 rounded shadow-md bg-gray-300 text-gray-600 transition duration-300 ease-in-out hover:bg-gray-400 cursor-pointer">
        <FaPhoneAlt className="mr-2" />
        <h3>Contact Us</h3>
      </div>
    </a>
  );
};

export default Contact;
