import Link from 'next/link';

const DbButton = () => {
  return (
    <Link href="/database">
      <button className="block bg-white text-black hover:bg-violet-500 hover:text-white py-4 px-8 rounded-lg shadow-lg text-xl font-semibold mr-4 w-100 h-15">
        Database
      </button>
    </Link>
  );
};

export default DbButton;
