# Unittests in JS

## Resources
Read:

- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/api/)
- [Sinon](https://sinonjs.org/#get-started)
- [Express](https://expressjs.com/en/guide/routing.html)
- [Request](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-nodejs-apps-using-mocha-chai-and-sinonjs)

## Learning Objectives
At the end of this project, you are expected to be able to explain to anyone, without the help of Google:
- How to use Mocha to write a test suite
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies
- When and how to use stubs
- What are hooks and when to use them
- Unit testing with Async functions
- How to write integration tests with a small node server

## Requirements
- All of your code will be executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the `js` extension
- When running every test with `npm run test *.test.js`, everything should pass correctly without any warning or error

## Project Setup
1. **Install Node.js and npm:**
    ```sh
    sudo apt update
    sudo apt install nodejs npm
    ```

2. **Initialize a new Node.js project:**
    ```sh
    npm init -y
    ```

3. **Install required packages:**
    ```sh
    npm install mocha chai sinon express request --save-dev
    ```

4. **Project Structure:**
    ```
    /project-root
    ├── node_modules/
    ├── test/
    │   ├── your-test-file.test.js
    ├── .gitignore
    ├── package.json
    ├── README.md
    ```

## Writing Tests

### Using Mocha to Write a Test Suite

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser. It's used for asynchronous testing, making it simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting while mapping uncaught exceptions to the correct test cases.

### Using Assertion Libraries (Node or Chai)
Chai is a BDD / TDD assertion library for Node.js and the browser that can be delightfully paired with any JavaScript testing framework.

### Presenting Long Test Suites
Organize your tests using `describe` and `it` blocks to present a clean and readable test suite.

### Spies and Stubs
- **Spies**: Use Sinon.js spies to observe the behavior of functions without modifying them in any way.
- **Stubs**: Use Sinon.js stubs to control the behavior of functions by replacing them during testing.

### Hooks

Hooks are functions that run at specific points in a test suite. Use `before`, `after`, `beforeEach`, and `afterEach` to set up preconditions and clean up after your tests.

### Unit Testing with Async Functions

Mocha supports testing asynchronous code, allowing you to use `async` / `await` or callbacks in your tests.

### Writing Integration Tests with a Small Node Server

Use Express to set up a small Node.js server and test it with Mocha and Chai.

## Running Tests

To run your tests, use the following command:
```sh
npm run test *.test.js
