import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitRegister = (data) => console.log(data);

  return (
    <>
      <h1>Register for an account</h1>
      <form onSubmit={handleSubmit(submitRegister)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
          />
          {errors.name?.type === 'required' && (
            <p className="validation-error" role="alert">
              Name is required
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
          />
          {errors.email?.type === 'required' && (
            <p className="validation-error" role="alert">
              Email is required
            </p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register('password', { required: true })}
          />
          {errors.password?.type === 'required' && (
            <p className="validation-error" role="alert">
              Password is required
            </p>
          )}
        </div>
        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default RegisterPage;
