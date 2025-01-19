import { create } from "zustand";

const useUserStore = create((set) => ({
  user: [],
  updateUser: (data) =>
    set((state) => {
      return {
        user: { id: Date.now(), data, completed: false },
      };
    }),
  clearUser: () => set(() => ({ user: null })),
}));

export default useUserStore;
