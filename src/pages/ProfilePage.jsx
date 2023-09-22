import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const ProfilePage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h2>Profile</h2>
      Your user account is activated.
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default ProfilePage;
