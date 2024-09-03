# Stores Directory

This directory is where global state is managed using Zustand. Each state slice is modularized into its own file and combined into a single store in the `index.ts` file.

## Organization

Each slice in this directory should have its own file, named according to its purpose. For example:

- `userSlice.ts` for user state.
- `cartSlice.ts` for user shopping cart state.

## Creating a New Slice

To create a new slice:

1. **Create a Slice File**: Create a new file in this directory.
2. **Define the Slice**: Inside the new file, define the slice's state using existing slices (or [Zustand slices docs](https://zustand.docs.pmnd.rs/guides/slices-pattern)) as a reference.
3. **Update the Store**: Import and integrate the new slice into `index.ts`.

## Usage

Once the slice is added to the `index.ts` file, you can access the global state throughout the application:

```typescript
import useStore from 'src/stores';

function Component() {
  const count = useStore(state => state.count);
  const incrementCount = useStore(state => state.incrementCount);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
```
