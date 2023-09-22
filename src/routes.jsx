import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import AddMoviePage from './pages/AddMoviePage';
import ErrorPage from './pages/ErrorPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import RequireLogout from './components/RequireLogout';

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'add-movie',
        element: (
          <ProtectedRoute>
            <AddMoviePage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: 'register',
        element: (
          <RequireLogout>
            <RegisterPage />
          </RequireLogout>
        ),
      },
      {
        path: 'login',
        element: (
          <RequireLogout>
            <LoginPage />
          </RequireLogout>
        ),
      },
    ],
  },
]);

export default router;
