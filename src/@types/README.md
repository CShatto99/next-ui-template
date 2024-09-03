# Types Directory

The "types" directory is where you can define custom TypeScript types and override dependency types to enhance type safety and provide better code documentation.

## Purpose

The "types" directory serves the following purposes:

1. **Custom Types**: It allows you to define custom TypeScript types and interfaces that are specific to the project's needs. These types can improve code readability and help catch type-related errors during development.

2. **Dependency Type Overrides**: You can override or extend types from third-party libraries or dependencies to tailor them to the project's requirements.

## Organization

- `index.d.ts`: This file serves as the entry point for custom general types and type overrides. You can create additional `.d.ts` files as needed, and they will be automatically included.

## Custom Types

In the `index.d.ts` file or any other `.d.ts` file you create in this directory, you can define custom types and interfaces using ES6 import and export syntax:

```typescript
// src/@types/index.d.ts
export type User = {
  id: number;
  name: string;
  email: string;
};

// More custom types can be defined here
```

## Dependency Type Overrides

To override or extend types from third-party libraries or dependencies, you can use [module augmentation](https://www.typescriptlang.org/docs/handbook/declaration-merging.html). For example, to extend the type of a library like React, you can create a `.d.ts` file and declare the changes:

```typescript
// src/@types/react/index.d.ts
import { CSSProperties } from 'react';

declare module 'react' {
  interface CSSProperties {
    '--theme-color'?: string; // Adding a custom CSS variable for theming
  }
}
```

This example adds a custom CSS variable for theming to the CSSProperties type of the React library.

## Usage

Custom types and type overrides declared in this directory are automatically available for use throughout the project. Simply import them where needed:

```typescript
// Import custom types
import { User } from 'src/@types';

// Use overridden types
import React from 'react';

const userStyle: React.CSSProperties = {
  '--theme-color': '#3498db',
};

function UserProfile({ user }: { user: User }) (
  <div style={userStyle}>
    <img src={user.avatarUrl} alt={user.name} />
    <h2>{user.name}</h2>
    <p>{user.email}</p>
  </div>
);
```
