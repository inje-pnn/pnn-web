import { create } from "zustand";

const useUserStore = create((set) => ({
  user: [],
  updateUser: (data) =>
    set((state) => {
      return {
        user: data,
      };
    }),
  clearUser: () => set(() => ({ user: null })),
}));

export default useUserStore;
