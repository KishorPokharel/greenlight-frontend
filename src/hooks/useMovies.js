import ApiClient from '../service/api-client';
import useSessionStore from '../store';

const useMovies = () => {
  const token = useSessionStore((s) => s.token);

  const addMovie = (data) => {
    const apiClient = new ApiClient('/movies');
    apiClient.withAuthToken(token);
    return apiClient.addMovie(data);
  };

  const getMovies = () => {
    const apiClient = new ApiClient('/movies');
    apiClient.withAuthToken(token);
    return apiClient.getMovies();
  };

  return { getMovies, addMovie };
};

export default useMovies;
