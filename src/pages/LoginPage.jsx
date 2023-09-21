import React from 'react';

const LoginPage = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <form action="">
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default LoginPage;
