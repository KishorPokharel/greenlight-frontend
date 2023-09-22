import ApiClient from '../service/api-client';

const useAuth = () => {
  const signup = (data) => {
    const apiClient = new ApiClient('/users');
    return apiClient.register(data);
  };

  const login = (data) => {
    const apiClient = new ApiClient('/tokens/authentication');
    return apiClient.login(data);
  };

  return { signup, login };
};

export default useAuth;
