# React Programming Challenge

Build a simple search web app using React and ES6. 

The app should display a search input and a grid of search results. Each search result should be rendered as a React component and the search results should update when the user types in the search input.

Feel free to use a public API of your choice. Some public APIs can be found here: https://github.com/toddmotto/public-apis

The app should utilise at least two features introduced to JavaScript in ES6.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
Clone the repository to your local environment, install any dependencies and install the packages. Run the development command to start a local server, run the build command to create a new version for release.

### Prerequisities

Before you start, generate the API key from Google youtube and copy the api_keys.example.js as api_keys.js and place your generated key there ( use the following link for more info: https://developers.google.com/youtube/registering_an_application * this is the valid url at the time this document was written, search otherwise ); If you can't be bothered just load the `/dist/index.html` and check the repository to see the source code (the `dist` directory only exists for this particular exam, can be deleted and you should be able to generate your own build, see below).


```
NodeJS + NPM
```

### Installing

```
npm install
```

```
npm run build
```

### Development

```
gulp dev
```	

### Build architecture

Find the source code under the `src` directory for javascript and `sass` for the stylesheets. Before modifying ensure that the development watcher is running by running the development watch command (see development notes). The `dist` directory holds the files ready for distribution.

## Built With

* ReactJS
* Webpack
* SASS
* ES2015
* GULP

### Exercise notes:

- Search for `es6 syntax:` to see where ES6 features are used.

