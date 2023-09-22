import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfilePage from '../pages/ProfilePage';
import useSessionStore from '../store';

const RequireLogout = ({ children }) => {
  const navigate = useNavigate();
  const token = useSessionStore((s) => s.token);
  useEffect(() => {
    if (token) {
      navigate('/profile');
      return;
    }
  }, []);
  return children;
};

export default RequireLogout;
