import React from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const registerFormSchema = z.object({
  name: z
    .string({ required: true, required_error: 'Name is required' })
    .min(2, 'Name must be atleast 2 characters')
    .max(20, 'Name must be less than 20 characters'),
  email: z
    .string({ required: true, required_error: 'Email is required' })
    .email('Invalid email'),
  password: z.string().min(10, 'Password must be atleast 10 characters'),
});

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });
  const submitRegister = (data) => console.log(data);

  return (
    <>
      <h2>Register for an account</h2>
      <form onSubmit={handleSubmit(submitRegister)}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: true })}
          />
          {errors.name && (
            <p className="validation-error" role="alert">
              {errors.name?.message}
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
          {errors.email && (
            <p className="validation-error" role="alert">
              {errors.email?.message}
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
          {errors.password && (
            <p className="validation-error" role="alert">
              {errors.password?.message}
            </p>
          )}
        </div>
        <input type="submit" value="Register" />
      </form>
    </>
  );
};

export default RegisterPage;
