import React from 'react';
import Link from 'next/link';

interface GreyButtonProps {
  text: string;
  href: string;
}

const GreyButton: React.FC<GreyButtonProps> = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="text-center text-md w-25 py-2  bg-gray-400 text-black rounded-lg shadow-lg text-xl font-semibold mr-4 w-full transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white active:border-gray-300 active:shadow-md"
    >
      {text}
    </Link>
  );
};

export default GreyButton;
