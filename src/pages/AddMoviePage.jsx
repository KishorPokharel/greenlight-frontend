import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import useMovies from '../hooks/useMovies';

const addMovieFormSchema = z.object({
  title: z.string().nonempty('Title is required').trim(),
  year: z
    .string()
    .trim()
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
  genres: z
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

  const navigate = useNavigate();
  const { addMovie } = useMovies();

  const submitAddMovie = (data) => {
    addMovie(data)
      .then((res) => {
        navigate('/');
      })
      .catch((err) => console.error(err.response.data));
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
            type="text"
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
            type="text"
            id="genre"
            placeholder="family,drama"
            {...register('genres')}
          />
          {errors.genres && (
            <p className="validation-error" role="alert">
              {errors.genres?.message}
            </p>
          )}
        </div>
        <input type="submit" value="Add new movie" />
      </form>
    </>
  );
};

export default AddMoviePage;
