import React from 'react';
import styles from './button.module.css'; // Adjust the path as needed

interface GreyButtonProps {
  text: string;
  href: string;
}

const GreyButton: React.FC<GreyButtonProps> = ({ text, href }) => {
  return (
    <a href={href} className={`${styles['grey-button']} block py-4 px-8 rounded-lg shadow-lg text-xl font-semibold mr-4 w-100 h-15 transition-all duration-150 ease-in-out`}>
      {text}
    </a>
  );
};

export default GreyButton;
