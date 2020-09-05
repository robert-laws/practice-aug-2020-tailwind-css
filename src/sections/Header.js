import React from 'react';
import { Logo, Navigation } from './';
import { Image } from '../components/ui';
import logoImg from '../images/logo.png';

export const Header = () => {
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
