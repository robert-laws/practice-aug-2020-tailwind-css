import React, { useContext } from 'react';
import { NavigationLink } from '../components/ui';
import AuthContext from '../context/auth/authContext';

export const Navigation = ({ navStyles }) => {
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  return (
    <nav className={navStyles}>
      {user ? (
        <>
          <NavigationLink styles='mx-6 hover:text-red-400' location='todos'>
            My To Do Lists
          </NavigationLink>
          <NavigationLink styles='mx-6 hover:text-red-400' location='profile'>
            My Profile
          </NavigationLink>
          <NavigationLink styles='mx-6 hover:text-red-400' location='keywords'>
            My Keywords
          </NavigationLink>
        </>
      ) : (
        ''
      )}
      <NavigationLink styles='mx-6 hover:text-red-400' location='about'>
        About Us
      </NavigationLink>
    </nav>
  );
};
