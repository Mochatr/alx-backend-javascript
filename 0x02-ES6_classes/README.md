# ES6 Classes Project

## Overview

This project covers the fundamentals of working with ES6 classes in JavaScript. It delves into defining classes, adding methods, understanding static methods, inheritance, and introduces the concept of metaprogramming. The code is implemented in JavaScript, compatible with Ubuntu 18.04 LTS, and adheres to best practices with ESLint and Jest testing.

## Learning Objectives

By the end of this project, you should be able to:

- Define and create classes in JavaScript.
- Add methods to a class.
- Understand and utilize static methods in classes.
- Extend classes to create subclasses.
- Implement basic metaprogramming with symbols.

## Requirements

- **Node Version**: NodeJS 12.11.x
- **Code Editors**: vi, vim, emacs, Visual Studio Code
- **File Specifications**:
  - All files should end with a newline.
  - Code files should use the `.js` extension.
  - A `README.md` file at the root of the project folder is mandatory.
- **Testing**:
  - Code will be tested using Jest. Run tests with the command: `npm run test`
  - Code linting will be checked using ESLint. Verify linting with the command: `npm run full-test`
- **Commands**:
  - `npm run full-test` runs both linting and testing to ensure code quality.

## Setup Instructions

- **Install NodeJS 12.11.x**:
   ```bash
   curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
   sudo bash nodesource_setup.sh
   sudo apt install nodejs -y
   ```
## Configuration files

### package.json

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/preset-env": "^7.6.0",
    "@babel/node": "^7.8.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}

```

### babel.config.js

```js
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};

```

### .eslintrc.js

```js
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};

```

Don’t forget to run the following command to install all the dependencies.

```bash
$ npm install 
```
