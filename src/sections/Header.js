import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Image from '../components/Image';
import logoImg from '../images/logo.png';

const Header = () => {
  return (
    <header className='flex flex-row items-center px-10 bg-gray-200 h-16'>
      <Logo logoStyles='logo flex-initial'>
        <Image
          srcFile={logoImg}
          imgStyles={{ height: '50px' }}
          alt='To Do App Logo'
        />
      </Logo>
      <Navigation navStyles='flex-auto flex justify-end' />
    </header>
  );
};

export default Header;
