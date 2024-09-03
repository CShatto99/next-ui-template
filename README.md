# next-ui-template

An opinionated starter kit for Next.js web apps.

## Table of Contents

- [Installation](#installation)

  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Install Dependencies](#2-install-dependencies)
  - [3. Start Developing](#3-start-developing)

- [Scripts](#scripts)

  - [build](#build)
  - [build:analyze](#buildanalyze)
  - [build-storybook](#build-storybook)
  - [dev](#dev)
  - [docs](#docs)
  - [format](#format)
  - [format:fix](#formatfix)
  - [lint](#lint)
  - [lint:fix](#lintfix)
  - [lint-staged](#lint-staged)
  - [prepare](#prepare)
  - [start](#start)
  - [storybook](#storybook)
  - [test:e2e](#teste2e)
  - [test:e2e:report](#teste2ereport)
  - [test:unit](#testunit)
  - [test:unit:ci](#testunitci)
  - [test:unit:coverage](#testunitcoverage)

- [Tech Stack](#tech-stack)

## Installation

To get started with the next-ui-template repo, follow these steps:

### 1. Clone the Repository

```bash
# Clone with HTTPS
git clone https://github.com/CShatto99/next-ui-template.git

# Clone with SSH
git clone git@github.com:CShatto99/next-ui-template.git

# GitHub CLI
gh repo clone CShatto99/next-ui-template
```

### 2. Install Dependencies

After cloning the project, install the repo dependencies:

```bash
npm install
```

### 3. Start Developing

You are now ready to start modifying the next-ui-template repo. You can get started by running the development server with `npm run dev` or looking at additional scripts in the [Scripts](#scripts) section below.

## Scripts

Below are each of the package.json scripts that the next-ui-template repo provides.

### `build`

```shell
npm run build
```

This script uses `next build` to build the Next.js project for production. It compiles all necessary files, optimizes assets, and prepares the application for deployment.

### `build:analyze`

```shell
npm run build:analyze
```

This script runs `next build` with the `ANALYZE=true` environment variable, enabling the bundle analyzer. It generates a visual report of the build, helping to identify and optimize large modules.

### `build-storybook`

```shell
npm run build-storybook
```

This script uses `storybook build` to generate a static version of the project's Storybook instance. It compiles all UI components and their stories into a set of static files that can be deployed to any web server.

### `dev`

```shell
npm run dev
```

This script starts the development server for the Next.js project using `next dev`. It watches for changes and hot-reloads the application, allowing for a smooth development experience.

### `docs`

```shell
npm run docs
```

This command runs TypeDoc to generate HTML documentation for the TypeScript files located in the `src` directory. The documentation can be viewed by opening `docs/index.html` in a web browser.

### `format`

```shell
npm run format
```

This script uses Prettier to check the formatting of all files in the project without making any changes. It ensures that your code follows consistent formatting rules, reporting any issues in the console.

### `format:fix`

```shell
npm run format:fix
```

This script runs Prettier with the `--write` flag, automatically formatting and updating all files in the project to conform to the defined style guidelines.

### `lint`

```shell
npm run lint
```

This script runs `next lint`, which uses ESLint to analyze the code for potential issues and enforce coding standards in both JavaScript and TypeScript files, including JSX and TSX files.

### `lint:fix`

```shell
npm run lint:fix
```

Similar to the `lint` script, this command uses `next lint --fix` to analyze the code and automatically fix any issues that can be corrected, ensuring the codebase adheres to best practices.

### `lint-staged`

```shell
npm run lint-staged
```

This script runs [lint-staged](https://github.com/okonet/lint-staged) to lint and format only the files that are staged for commit. It ensures that only properly formatted and linted code is committed to the repository.

### `prepare`

```shell
npm run prepare
```

This script is executed automatically after package installation to set up Husky. Husky is used to configure Git hooks, such as pre-commit hooks, which can automate actions like linting and testing before commits are made.

### `start`

```shell
npm run start
```

This script uses `next start` to run the Next.js application in production mode. It starts the server with the compiled output, making the app ready for deployment.

### `storybook`

```shell
npm run storybook
```

This script starts the Storybook development server on port 6006 with `storybook dev`. It provides a live environment for developing and testing UI components in isolation.

### `test:e2e`

```shell
npm run test:e2e
```

Runs end-to-end tests using the `playwright test` command. This script executes the Playwright test suite to verify that the application functions correctly across various browsers.

### `test:e2e:report`

```shell
npm run test:e2e:report
```

Generates and displays the Playwright test report using the `playwright show-report` command. This script provides a visual summary of test results, making it easier to review outcomes and diagnose any issues encountered during the tests.

### `test:unit`

```shell
npm run test:unit
```

Executes tests using [Vitest](https://vitest.dev), a versatile test runner for modern web applications.

### `test:unit:ci`

```shell
npm run test:unit:ci
```

Runs tests in a continuous integration environment using [`vitest run`](https://vitest.dev/guide/cli.html#vitest-run). This command executes the tests without entering watch mode and exits once the test suite completes

### `test:unit:coverage`

```shell
npm run test:unit:coverage
```

Runs tests with coverage analysis using [`vitest run --coverage`](https://vitest.dev/guide/coverage.html#coverage-setup), generating a detailed report of test coverage for the project. The coverage report can be viewed by opening `coverage/index.html` in a web browser.

## Tech Stack

- [**Commitlint**](https://commitlint.js.org/): Commitlint checks if your commit messages meet the conventional commit format to ensure a consistent commit history.

- [**ESLint**](https://eslint.org): ESLint is a static code analysis tool that helps developers find and fix code errors and enforce coding standards.

- [**Husky**](https://typicode.github.io/husky): Husky is a Git hooks manager that allows developers to automate tasks and enforce pre-commit and pre-push checks to maintain code quality.

- [**Lint-Staged**](https://github.com/lint-staged/lint-staged): Lint-Staged is a tool that runs linters on pre-committed files, enabling developers to apply code quality checks selectively to staged changes.

- [**Mantine**](https://mantine.dev): Mantine is a React component library that provides a comprehensive set of components, hooks, and utilities for building modern, responsive, and accessible web applications.

- [**Next.js**](https://nextjs.org/): Next.js is a powerful React framework that enables server-side rendering, static site generation, and a variety of other features for building scalable and high-performance web applications. It streamlines development with file-based routing, API routes, and full-stack capabilities.

- [**Playwright**](https://playwright.dev/): Playwright is a Node.js library for end-to-end testing of web applications. It supports multiple browsers, including Chromium, Firefox, and WebKit, enabling reliable testing across different environments. Playwright's API allows for automating browser interactions, ideal for testing complex UIs.

- [**Prettier**](https://prettier.io): Prettier is an opinionated code formatter that automatically formats code to ensure consistent and readable code styles across a project.

- [**React Query**](https://tanstack.com/query/latest/docs/framework/react/overview): React Query is a powerful data-fetching library for React. It simplifies server state management by handling caching, synchronization, and background updates, allowing developers to focus on building efficient, data-driven applications with minimal effort.

- [**Semantic Release**](https://semantic-release.gitbook.io/semantic-release): Semantic Release automates the versioning and package publishing process, based on the commit messages in your repository.

- [**Storybook**](https://storybook.js.org/docs): Storybook is an open-source tool for developing UI components in isolation. It provides a visual environment for building, testing, and documenting components, helping developers ensure consistency and quality across a project’s user interface.

- [**TypeDoc**](https://typedoc.org): TypeDoc is a documentation generator for TypeScript projects, which leverages TypeScript's type system to create comprehensive and accurate documentation from your codebase.

- [**TypeScript**](https://www.typescriptlang.org): TypeScript is a statically typed superset of JavaScript that enhances code quality and developer productivity by providing type checking, improved tooling, and better maintainability in large-scale web development projects.

- [**Vitest**](https://vitest.dev): Vitest is a fast unit test framework heavily inspired by Jest. It offers a great developer experience with modern features like out-of-the-box TypeScript support, native ESM, and a fast in-memory filesystem for quick test runs.

- [**Zustand**](https://zustand.docs.pmnd.rs/getting-started/introduction): Zustand is a small, fast, and scalable state management library for React. It provides a simple API for managing global state with minimal boilerplate, making it easy to maintain and scale state across your application.
