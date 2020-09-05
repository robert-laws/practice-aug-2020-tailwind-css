import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavigationLink = ({
  styles,
  location,
  exact = false,
  children,
}) => {
  return (
    <NavLink className={styles} to={location} exact={exact}>
      {children}
    </NavLink>
  );
};
