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
      className="text-center text-md w-25 py-2 md:w-40 md:py-5 lg:w-40 lg:py-5 bg-yellow-400 text-black  rounded-lg shadow-lg text-xl font-semibold transition-all duration-150 ease-in-out hover:bg-yellow-600 hover:text-white active:border-gray-300 active:shadow-md"
    >
      {text}
    </Link>
  );
};

export default YellowButton;
