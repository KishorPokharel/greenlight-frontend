import React from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

const addMovieFormSchema = z.object({
  title: z.string().nonempty('Title is required').trim(),
  year: z
    .string()
    .nonempty('Year is required')
    .pipe(
      z.coerce
        .number()
        .min(1900, 'Year must be greater than 1900')
        .max(2100, 'Year must be less than 2100')
    ),
  runtime: z
    .string()
    .nonempty('Runtime is required')
    .trim()
    .regex(/^\d+$/, 'Runtime must be a number')
    .transform((val) => val + ' mins'),
  genre: z
    .string()
    .nonempty('Genre is required')
    .trim()
    .transform((val) => val.split(',').filter((v) => v.length > 0)),
});

const AddMoviePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(addMovieFormSchema),
  });

  const submitAddMovie = (data) => {
    console.log(data);
  };

  return (
    <>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit(submitAddMovie)}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            placeholder="A beautiful movie"
            {...register('title')}
          />
          {errors.title && (
            <p className="validation-error" role="alert">
              {errors.title?.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            placeholder="1982"
            {...register('year')}
          />
          {errors.year && (
            <p className="validation-error" role="alert">
              {errors.year?.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="runtime">Runtime in minutes</label>
          <input
            type="runtime"
            id="runtime"
            placeholder="90"
            {...register('runtime')}
          />
          {errors.runtime && (
            <p className="validation-error" role="alert">
              {errors.runtime?.message}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <input
            type="genre"
            id="genre"
            placeholder="family,drama"
            {...register('genre')}
          />
          {errors.genre && (
            <p className="validation-error" role="alert">
              {errors.genre?.message}
            </p>
          )}
        </div>
        <input type="submit" value="Add new movie" />
      </form>
    </>
  );
};

export default AddMoviePage;
