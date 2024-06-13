// components/button/DbButton.tsx

import Link from 'next/link';
import styles from './button.module.css'; // Import the CSS module

const DbButton = () => {
  return (
    <Link href="/database">
      <button className={`block ${styles.dbButton} py-4 px-8 rounded-lg shadow-lg text-xl font-semibold mr-4 w-100 h-15 transition-all duration-150 ease-in-out`}>
        Database
      </button>
    </Link>
  );
};

export default DbButton;
