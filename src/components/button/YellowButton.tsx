import React from 'react';
import Link from 'next/link';

interface YellowButtonProps {
  text: string;
  href: string;
}

const YellowButton: React.FC<YellowButtonProps> = ({ text, href }) => {
  return (
    <Link
      href={href}
      className="block text-center text-sm py-2 px-4 sm:text-base sm:py-3 sm:px-6 md:text-lg md:py-4 md:px-8 lg:text-xl lg:py-5 lg:px-10 bg-yellow-400 text-black rounded-lg shadow-lg font-semibold transition-all duration-300 ease-in-out hover:bg-yellow-600 hover:text-white active:border-gray-300 active:shadow-md"
    >
      {text}
    </Link>
  );
};

export default YellowButton;
