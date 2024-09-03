# Components Directory

This directory is where you organize and store React components. Each component is organized within its own directory for better maintainability, styling, testing, and documentation.

## Organization

Components are organized within their own parent directories for better organization and scalability. For example:

```bash
components/
└── ComponentName/
    ├── index.tsx               # The component's code
    ├── index.module.{css,scss} # Component-specific styles
    ├── index.stories.tsx       # Stories for Storybook
    └── index.test.tsx          # Test cases for the component
```

## Usage

To use a component, simply import it from its directory:

```typescript
import ComponentName from 'src/components/ComponentName';
```
