import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <h2>Greenlight</h2>
      <ul className="navbar">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/add-movie">Add Movie</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
