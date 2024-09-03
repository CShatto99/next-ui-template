# Utils Directory

The "utils" directory is where you store utility and helper functions that are used across the project. This central location promotes code reusability and maintains a clean codebase.

## Organization

Utility functions are organized within their own parent directories for better organization and scalability. For example:

```bash
utils/
└── exampleUtil/
    ├── index.ts       # Utility function implementation
    └── index.test.ts  # Test cases for the utility function
```

## Usage

To use a utility function, import it from its directory:

```typescript
import exampleUtil from 'src/utils/exampleUtil';
```
