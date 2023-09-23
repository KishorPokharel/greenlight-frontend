import React, { useEffect, useState } from 'react';
import useMovies from '../hooks/useMovies';

const Movies = () => {
  const { getMovies } = useMovies();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies()
      .then((res) => setMovies(res.data.movies))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h2>Movies</h2>
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
