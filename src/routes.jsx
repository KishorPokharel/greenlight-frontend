import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import AddMoviePage from './pages/AddMoviePage';
import ErrorPage from './pages/ErrorPage';
const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'add-movie', element: <AddMoviePage /> },
    ],
  },
]);

export default router;
