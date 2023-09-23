import React from 'react';
import { RouterProvider } from 'react-router';
import useAuth from './hooks/useAuth';
import router from './routes';

const App = () => {
  const { loadSession } = useAuth();
  loadSession();
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
