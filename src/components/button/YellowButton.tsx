import React from 'react';
import styles from './button.module.css'; // Adjust the path as needed

interface YellowButtonProps {
  text: string;
  href: string;
}

const YellowButton: React.FC<YellowButtonProps> = ({ text, href }) => {
  return (
    <a href={href} className={`${styles['yellow-button']} py-4 px-8 rounded-lg shadow-lg text-xl font-semibold w-100 h-15 transition-all duration-150 ease-in-out`}>
      {text}
    </a>
  );
};

export default YellowButton;
