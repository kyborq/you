import {create} from 'zustand';

export type TTask = {
  id: string;
  title: string;
  createdDate: Date;
};

type Store = {
  tasks: TTask[];
  createTask: (task: TTask) => void;
};

export const useTaskStore = create<Store>(set => ({
  tasks: [],
  createTask: task => set(store => ({tasks: [...store.tasks, task]})),
}));
