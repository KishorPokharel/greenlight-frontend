import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import useAuth from '../hooks/useAuth';

const loginFormSchema = z.object({
  email: z
    .string({ required: true, required_error: 'Email is required' })
    .email('Invalid email'),
  password: z.string({
    required: true,
    required_error: 'Password is required',
  }),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const { login } = useAuth();

  const submitLogin = (data) => {
    login(data)
      .then((res) => {
        console.log(res.data);
        // extract token from localstorage
      })
      .catch((err) => {
        const { status } = err.response;
        if (err.response) {
          if (status >= 400 && status < 500) {
            toast.error('server error');
          }
        } else if (err.request) {
          toast.error('network error');
        } else {
          console.error(err);
        }
      });
  };

  return (
    <>
      <h2>Login to your account</h2>
      <form onSubmit={handleSubmit(submitLogin)}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" {...register('email')} />
          {errors.email && (
            <p className="validation-error" role="alert">
              {errors.email?.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" {...register('password')} />
          {errors.password && (
            <p className="validation-error" role="alert">
              {errors.password?.message}
            </p>
          )}
        </div>
        <input type="submit" value="Login" />
      </form>
    </>
  );
};

export default LoginPage;
