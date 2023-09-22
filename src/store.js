import { create } from 'zustand';

const useSessionStore = create((set) => {
  return {
    token: null,
    setToken: (token) => {
      return set(() => {
        return { token: token };
      });
    },
    removeToken: (token) => {
      return set(() => {
        return { token: null };
      });
    },
  };
});

export default useSessionStore;
