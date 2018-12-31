import React from 'react';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <NavLink to="/"> Home </NavLink>
      <NavLink to="/recipes"> Recipes </NavLink>
      <NavLink to="/grocery"> Grocery List </NavLink>
    </nav>
  );
};
