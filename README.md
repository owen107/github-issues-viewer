# Github Issues Viewer
This is a project for creating a Github Issues Viewer for NPM repos using ReactJS, ES6, Sass and Webpack.

##Technologies used:

- [React](http://facebook.github.io/react)
- [ES6](https://github.com/rse/es6-features)
- [Sass](http://sass-lang.com/) for css preprocessing
- [Webpack](https://webpack.github.io/)
- [Octicons](https://octicons.github.com/)
- [Babel](https://babeljs.io/)
- [Mocha](http://mochajs.org/)

## Instructions

### Installation & Running
1. Make sure you have [node.js](http://nodejs.org/) installed on your machine.
2. CD to the folder `cd github-issues-viewer`
3. Run `npm-install` to install the project dependencies
4. Run the start command `npm start` in the terminal
6. Fire up your browser at `http://localhost:8080/#/`

```
npm install

npm start

```

### Testing

The testing strategy I use for this project is `Shallow Rendering`. This lets us render our React component one level deep - without a DOM - so that we can write tests for it. And these shallow renderer tests work especially well with stateless function components.

The test runner for this project is Mocha and `expect` is the assertion library. And I also set up some React and JSX specific test tools (React Test Utils) to make writing unit tests easier. 

In order to run the tests, run the command below in terminal:
```
npm test
```

### Running App and Testing Simultaneously

Run the command below in terminal:

```
npm run dev
```
