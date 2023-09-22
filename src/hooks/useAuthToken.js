const useAuthToken = () => {
  const key = '__greenlight__auth__token__';

  const setToken = (value) => {
    localStorage.setItem(key, value);
  };

  const getToken = () => {
    return localStorage.getItem(key);
  };

  const removeToken = () => {
    return localStorage.removeItem(key);
  };

  return { setToken, getToken, removeToken };
};

export default useAuthToken;
