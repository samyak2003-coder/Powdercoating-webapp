import React from 'react';
import { FaPhoneAlt } from "react-icons/fa";
import Link from 'next/link';
import styles from './button.module.css'; // Import the CSS module

const Contact = () => {
  return (
    <Link href="#contact">
      <div className={`flex items-center ${styles.contactButton} px-4 py-2 rounded shadow-md transition duration-300 ease-in-out hover:bg-gray-100`}>
        <FaPhoneAlt className="mr-2" />
        <h3>Contact Us</h3>
      </div>
    </Link>
  );
};

export default Contact;