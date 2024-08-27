import {create} from 'zustand';

type Store = {
  currentDate: Date;
  updateCurrentDate: () => void;
};

export const useAppStore = create<Store>(set => ({
  currentDate: new Date(),
  updateCurrentDate: () => set(() => ({currentDate: new Date()})),
}));
