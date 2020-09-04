import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='flex flex-row items-center px-10 bg-gray-200 h-16'>
      <div className='logo flex-initial'>Logo</div>
      <nav className='flex-auto flex justify-end'>
        <NavLink className='mx-6 hover:text-red-400' exact to='/'>
          Home
        </NavLink>
        <NavLink className='mx-6 hover:text-red-400' to='todos'>
          To Do Lists
        </NavLink>
        <NavLink className='mx-6 hover:text-red-400' to='profile'>
          Profile
        </NavLink>
        <NavLink className='mx-6 hover:text-red-400' to='keywords'>
          Keywords
        </NavLink>
        <NavLink className='mx-6 hover:text-red-400' to='about'>
          About
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
