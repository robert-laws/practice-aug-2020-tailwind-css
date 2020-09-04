import React from 'react';
import NavigationLink from '../components/NavigationLink';

const Navigation = ({ navStyles }) => {
  return (
    <nav className={navStyles}>
      <NavigationLink styles='mx-6 hover:text-red-400' location='todos'>
        My To Do Lists
      </NavigationLink>
      <NavigationLink styles='mx-6 hover:text-red-400' location='profile'>
        My Profile
      </NavigationLink>
      <NavigationLink styles='mx-6 hover:text-red-400' location='keywords'>
        My Keywords
      </NavigationLink>
      <NavigationLink styles='mx-6 hover:text-red-400' location='about'>
        About Us
      </NavigationLink>
    </nav>
  );
};

export default Navigation;
