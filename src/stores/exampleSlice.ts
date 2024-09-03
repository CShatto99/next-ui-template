import { StateCreator } from 'zustand';

export type ExampleSlice = {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
};

export const createExampleSlice: StateCreator<
  ExampleSlice,
  [],
  [],
  ExampleSlice
> = set => ({
  count: 0,
  incrementCount: () => set(state => ({ count: state.count + 1 })),
  decrementCount: () => set(state => ({ count: state.count - 1 })),
});
