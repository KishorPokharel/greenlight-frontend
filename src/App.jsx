import React from 'react';
import { RouterProvider } from 'react-router';
import router from './routes';
import useAuth from './hooks/useAuth';

const App = () => {
  const { loadSession } = useAuth();
  loadSession();
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
