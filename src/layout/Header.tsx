import React from 'react';
import { useLocation } from 'react-router-dom';
import profileIcon from '../assets/ProfilePicture.png';

const Header = () => {
  const { pathname } = useLocation();
  return (
    <div className="flex justify-end items-center h-24">
      {pathname === '/' && (
        <div className="w-16 h-16 relative flex justify-center items-center mr-4 border-2 rounded-lg cursor-pointer">
          <svg
            className="stroke-white fill-neutral-500"
            width="24"
            height="18"
            viewBox="0 0 24 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M21.3296 0H3.10024C2.05812 0 1.21332 0.844805 1.21332 1.88692V16.1127C1.21332 17.1548 2.05812 17.9996 3.10024 17.9996H21.3296C22.3717 17.9996 23.2165 17.1548 23.2165 16.1127V1.88692C23.2165 0.844805 22.3717 0 21.3296 0Z M1 4.52862L10.7792 11.6989C11.5176 12.2404 12.7317 12.2404 13.4701 11.6989L23.4298 4.39735" />
          </svg>
          <div className="absolute top-4 left-9 bg-red-600 w-2 h-2 rounded-full border-2 border-white"></div>
        </div>
      )}
      <div className="flex items-center text-neutral-500 text-sm font-medium px-3 bg-white w-64 h-16 rounded-lg cursor-pointer">
        <img
          className="w-11 h-11 rounded-full border-zink-300 border-2 mr-4"
          src={profileIcon}
          alt="error"
        />
        <p>Максим Добжанский</p>
      </div>
    </div>
  );
};

export default Header;
