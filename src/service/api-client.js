import axios from 'axios';

class ApiClient {
  endpoint;
  axiosInstance = axios.create({
    baseURL: 'http://localhost:4000/v1',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  withAuthToken(token) {
    this.axiosInstance = axios.create({
      baseURL: 'http://localhost:4000/v1',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });
  }

  login(data) {
    return this.axiosInstance.post(this.endpoint, data);
  }

  register(data) {
    return this.axiosInstance.post(this.endpoint, data);
  }

  addMovie(data) {
    return this.axiosInstance.post(this.endpoint, data);
  }

  getMovies() {
    return this.axiosInstance.get(this.endpoint);
  }
}

export default ApiClient;
