# Would You Rather!

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how this applcation was created.<br>
You can find the most recent version of this application code [here](https://github.com/jpowell121/reactnd-would-u-rather-app).

## Table of Contents

- [To build the application](#build-instructions)
- [Design Process](#design-process)
- [Coding Process](#coding-process)
- [Folder Structure](#folder-structure)

## Build Instructions

Build the application using the following steps:

1.  Make sure that you have Node v8 or above installed.
2.  Clone this repo using `git clone --depth=1 https://github.com/react-boilerplate/react-boilerplate.git`
3.  Move to the appropriate directory: `cd react-would-u-rather-app`.<br />
4.  Run `yarn install` in order to install dependencies.<br />
5.  At this point you can run `yarn start` to see the app at `http://localhost:3000`._


## Design Process

I followed the design suggestions set out by the Udacity React Nanodegree program, basically following these steps:

1. Identify What Each View Should Look Like
    * Build mockups of each screen and determined URL pattern and contents
2. Break Each View Into a Hierarchy of Components
    * Used screen mockups to highlight individual proposed components
    * Highlighted when a component could be functional
3. Determine What Events Happen in the App
    * Used views from step one to determine events
4. Determine What Data Lives in the Store
    * Determined that Questions and Users and authedUser should live in the store.
     

## Coding Process



1. Cleaned up create-react-app basic structure, started this README.md and also cleaned up files that will not be used.
2. Created directory structure in Rails fashion.
3. Added in _DATA.js as a starter file.
4. Created API around _DATA.js to simulate backend API.
5. Added initial action creators for store segments. Including aysnc creator to load initial data.
6. Added initial reducers and combineReducers (added redux, react-redux, redux-thunk).
7. Added thunking and made App a connected component - added middleware, and wrapped App and provider.


## Folder Structure

The final product structure is as follows:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    /actions
        authedUser.js
        questions.js
        shared.js
        users.js
    /components
        App.js
    /middleware
        index.js
        logger.js
    /reducers
        authedUser.js
        index.js
        questions.js
        users.js
    /utils
        _DATA.js
        API.js
    App.test.js
    index.css
    index.js
    
```



