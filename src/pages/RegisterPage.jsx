import React from 'react';

const RegisterPage = () => {
  return (
    <>
      <h1>Register for an account</h1>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
        </div>
        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default RegisterPage;
