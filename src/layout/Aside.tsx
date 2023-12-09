import React from 'react';
import { NavLink } from 'react-router-dom/dist';
import Logo from '../assets/logo.svg';
import CartIcon from '../components/Icons/CartIcon';
import HomeIcon from '../components/Icons/HomeIcon';

const Aside = () => {
  return (
    <aside className="bg-white w-64 h-screen  text-neutral-500 text-sm mr-14">
      <NavLink to="/">
        <img className="mt-7 ml-6 mb-7 cursor-pointer" src={Logo} alt="" />
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? 'flex items-center h-12 pl-6 border-l-2 cursor-pointer border-l-indigo-500 stroke-indigo-500 text-neutral-700 '
            : 'flex items-center h-12 pl-6 border-l-2 cursor-pointer border-l-white stroke-neutral-500'
        }
      >
        <HomeIcon />
        <p className="font-medium">Главная</p>
      </NavLink>

      <NavLink
        to="/stores"
        className={({ isActive }) =>
          isActive
            ? 'flex items-center h-12 pl-6 border-l-2 cursor-pointer border-l-indigo-500 stroke-indigo-500 text-neutral-700'
            : 'flex items-center h-12 pl-6 border-l-2 cursor-pointer border-l-white stroke-neutral-500'
        }
      >
        <CartIcon />
        <p className="font-medium">Мои магазины</p>
      </NavLink>
    </aside>
  );
};

export default Aside;
