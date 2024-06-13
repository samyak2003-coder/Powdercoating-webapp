import Link from 'next/link';

const MainButton = () => {
  return (
    <Link href="/">
      <button className=" bg-yellow-500 text-black hover:bg-yellow-600 hover:text-black active:border active:border-yellow-300 active:shadow-outline py-4 px-8 rounded-lg shadow-lg text-xl font-semibold w-100 h-15 transition-all duration-150 ease-in-out">
        Main Page
      </button>
    </Link>
  );
};

export default MainButton;
