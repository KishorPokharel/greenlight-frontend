import ApiClient from '../service/api-client';
import useSessionStore from '../store';
import useAuthToken from './useAuthToken';

const useAuth = () => {
  const { removeToken, setToken, getToken } = useAuthToken();

  const setSessionToken = useSessionStore((s) => s.setToken);
  const removeSessionToken = useSessionStore((s) => s.setToken);

  const signup = (data) => {
    const apiClient = new ApiClient('/users');
    return apiClient.register(data);
  };

  const login = (data) => {
    const apiClient = new ApiClient('/tokens/authentication');
    return apiClient.login(data);
  };

  // removes from local storage and zustand store
  const logout = () => {
    removeToken(); // from localstorage
    removeSessionToken(); // from memory
  };

  // saves to local storage and zustand store
  const saveSession = (token) => {
    setToken(token); // to localstorage
    setSessionToken(token); // to memory
  };

  const loadSession = () => {
    const token = getToken(); // from localstorage
    setSessionToken(token); // to memory
  };

  const isLoggedIn = () => {
    return !!useSessionStore((s) => s.token);
  };

  return { signup, login, logout, saveSession, loadSession, isLoggedIn };
};

export default useAuth;
