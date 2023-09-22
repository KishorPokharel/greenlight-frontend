import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useSessionStore from '../store';

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  const token = useSessionStore((s) => s.token);
  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  return children;
};

export default ProtectedRoute;
