import { create } from "zustand";

const useUserStore = create((set) => ({
  user: [],
  updateUser: (data) =>
    set((state) => {
      console.log(data);
      return {
        user: { id: Date.now(), data, completed: false },
      };
    }),
}));

export default useUserStore;
