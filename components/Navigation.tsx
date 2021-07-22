import Link from 'next/link';
import React from 'react';

const Navigation = (): JSX.Element => {
  return (
    <nav>
      <Link href="/">
        <a className="text-secondery dark:text-secondery text-2xl pr-10 py-4">Youssef Bouzekri</a>
      </Link>
      <Link href="/">
        <a className="text-gray-900 dark:text-white text-xl pr-6 py-4">/home</a>
      </Link>
      <Link href="/about">
        <a className="text-gray-900 dark:text-white text-xl hover:text-gray-900 px-6 py-4">/about</a>
      </Link>
    </nav>
  );
};

export default Navigation;
