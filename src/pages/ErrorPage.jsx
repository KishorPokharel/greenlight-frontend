import React from 'react';
import Navbar from '../components/Navbar';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar></Navbar>
      <h2>Oops</h2>
      {isRouteErrorResponse(error)
        ? 'This page does not exist'
        : 'Unexpected error occured'}
    </>
  );
};

export default ErrorPage;
