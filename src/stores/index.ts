import { create } from 'zustand';
import { createExampleSlice, ExampleSlice } from './exampleSlice';

/**
 * Add additional slice states using TypeScript Intersection Types:
 * https://www.typescriptlang.org/docs/handbook/2/objects.html#intersection-types.
 *
 * E.g. type StoreState = ExampleSlice & UserSlice & OtherSlice;
 */
type StoreState = ExampleSlice;

const useStore = create<StoreState>()((...a) => ({
  ...createExampleSlice(...a),
}));

export default useStore;
