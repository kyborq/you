import {create} from 'zustand';

type Store = {
  tabBarHidden: boolean;
  setTabBarVisible: (hidden: boolean) => void;
  currentDate: Date;
  updateCurrentDate: () => void;
};

export const useAppStore = create<Store>(set => ({
  tabBarHidden: false,
  setTabBarVisible: hidden => set(() => ({tabBarHidden: hidden})),
  currentDate: new Date(),
  updateCurrentDate: () => set(() => ({currentDate: new Date()})),
}));
