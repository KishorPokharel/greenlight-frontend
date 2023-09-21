import React from 'react';
import useMovies from '../hooks/useMovies';

const Movies = () => {
  const movies = useMovies();

  return (
    <div>
      <h1>Movies</h1>
      {movies &&
        movies.map((movie) => (
          <div key={movie.id}>
            <h3>{movie.title}</h3>
            <p>{movie.runtime}</p>
            <p>{movie.year}</p>
            <ul>
              {movie.genres.map((genre) => (
                <li key={genre}>{genre}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Movies;
