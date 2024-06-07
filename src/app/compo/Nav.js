import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
            <Link href="/">
          <img
            src="/logo.png" // replace with your actual logo URL
            alt="SopApps Logo"
            className="w-10 h-10 mr-2"
          />
          <h1 className="text-white text-2xl font-bold">SopApps</h1>
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4 text-white">
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/apps" className="hover:underline">
                Apps
              </a>
            </li>
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
