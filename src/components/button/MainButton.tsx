import Link from 'next/link';
import styles from './button.module.css'; 

const MainButton = () => {
  return (
    <Link href="/">
      <button className={`${styles['main-button']} py-4 px-8 rounded-lg shadow-lg text-xl font-semibold w-100 h-15 transition-all duration-150 ease-in-out`}>
        Main Page
      </button>
    </Link>
  );
};

export default MainButton;
