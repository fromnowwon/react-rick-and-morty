import { create } from "zustand";

interface CharacterStore {
  page: number;
  setPage: (page: number) => void;
}

export const useCharacterStore = create<CharacterStore>((set) => ({
  page: 1,
  setPage: (page: number) => set({ page }),
}));
