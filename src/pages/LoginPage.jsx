import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import ValidationErrors from '../components/ValidationErrors';
import useAuth from '../hooks/useAuth';

const loginFormSchema = z.object({
  email: z
    .string({ required: true, required_error: 'Email is required' })
    .trim()
    .toLowerCase()
    .email('Invalid email'),
  password: z
    .string({
      required: true,
      required_error: 'Password is required',
    })
    .trim(),
});

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const [badRequestErrors, setBadRequestErrors] = useState(null);
  const { login, saveSession } = useAuth();

  const navigate = useNavigate();

  const submitLogin = (data) => {
    login(data)
      .then((res) => {
        const {
          authentication_token: { token },
        } = res.data;
        console.log(token);
        saveSession(token);
        navigate('/');
      })
      .catch((err) => {
        const { status, data } = err.response;
        if (err.response) {
          if (status >= 400 && status < 500) {
            setBadRequestErrors(data.error);
          }
        } else if (err.request) {
          toast.error('Network error');
        } else {
          console.error(err);
        }
      });
  };

  return (
    <>
      <ValidationErrors errors={badRequestErrors} />
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
