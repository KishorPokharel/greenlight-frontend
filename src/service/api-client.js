import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

class ApiClient {
  endpoint;
  constructor(endpoint) {
    this.endpoint = endpoint;
  }

  login(data) {
    return axiosInstance.post(this.endpoint, data);
  }

  register(data) {
    return axiosInstance.post(this.endpoint, data);
  }
}

export default ApiClient;
