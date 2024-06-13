import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 w-full bg-black text-white shadow-md border-b border-gray-800">
      <div className="container mx-auto flex items-center justify-between p-4">
        <img src="./Logo.png" alt="Logo" className="h-24 w-auto" />
        <h1 className="text-2xl font-bold">
          <Link href="/" className="text-white hover:text-gray-300">Trackter</Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
