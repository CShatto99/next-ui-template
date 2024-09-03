# Constants Directory

The "constants" directory houses various constant values used consistently throughout the project. Storing global constants in one central location promotes maintainability and readability.

## Purpose

The "constants" directory is dedicated to storing values that remain unchanged throughout the project, such as configuration settings, API endpoints, error codes, and other immutable data.

## Organization

Organize constants logically within this directory. For example:

- `index.ts` for general constants.
- `api.ts` for API-related constants.
- `config.ts` for configuration settings.
- `errorCodes.ts` for error codes and messages.
- `routes.ts` for route paths.

## Usage

To access constants, import them from this directory:

```typescript
import { API_URL } from 'src/constants/api';
import { ERROR_CODES } from 'src/constants/errorCodes';
```
