import React from 'react';
import { NavLink } from 'react-router-dom';
import useSessionStore from '../store';

const Navbar = () => {
  const token = useSessionStore((s) => s.token);
  return (
    <>
      <h2>Greenlight</h2>
      <ul className="navbar">
        {token && (
          <>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/add-movie">Add Movie</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
          </>
        )}
        {!token && (
          <>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </>
        )}
      </ul>
    </>
  );
};

export default Navbar;
