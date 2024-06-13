import Link from 'next/link';

const DbButton = () => {
  return (
    <Link href="/database">
      <button className="block bg-gray-500 text-white hover:bg-gray-700 hover:text-white active:border active:border-gray-300 active:shadow-outline py-4 px-8 rounded-lg shadow-lg text-xl font-semibold mr-4 w-100 h-15 transition-all duration-150 ease-in-out">
        Database
      </button>
    </Link>
  );
};

export default DbButton;
