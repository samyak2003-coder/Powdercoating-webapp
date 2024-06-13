import Link from 'next/link';

const MainButton = () => {
  return (
    <Link href="/">
      <button className="block bg-violet-500 text-white hover:bg-white hover:text-black py-4 px-8 rounded-lg shadow-lg text-xl font-semibold w-100 h-15">
        Main Page
      </button>
    </Link>
  );
};

export default MainButton;
