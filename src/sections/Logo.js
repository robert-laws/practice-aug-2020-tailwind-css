import React from 'react';
import { NavigationLink } from '../components/ui';

export const Logo = ({ logoStyles, children }) => {
  return (
    <div className={logoStyles}>
      <NavigationLink
        styles='mx-6 hover:text-red-400'
        exact={true}
        location='/'
      >
        {children}
      </NavigationLink>
    </div>
  );
};
