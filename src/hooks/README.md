# Hooks Directory

This directory contains custom React hooks used throughout the project. Custom hooks are a powerful way to encapsulate and share logic between different components.

## Purpose

The "hooks" directory serves as a central location for custom hooks that provide specific functionality. These hooks can be reused across multiple components to maintain a DRY (Don't Repeat Yourself) codebase.

## Organization

Each hook in this directory should have its own file, named according to its purpose. For example:

- `useCounter.ts` a simple example hook to increment a counter on click.
- `useLocalStorage.ts` for hooks related to local storage interactions.
- `useApi.ts` for hooks related to API calls.

## Usage

To use a custom hook in a component, import it from this directory:

```typescript
import useCustomHook from 'src/hooks/useCustomHook';
```
