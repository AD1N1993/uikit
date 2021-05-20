# <em><b>Creative Integrator</b></em>

## Features

Boilerplate with the most popular technologies:

- [Universal](https://medium.com/@mjackson/universal-javascript-4761051b7ae9) rendering with async data fetching.
- [React](https://facebook.github.io/react) as the view library.
- [Redux](https://github.com/reactjs/redux) as the state management.
- [Redux Toolkit](https://redux-toolkit.js.org) for efficient Redux development.
- [React Router](https://reacttraining.com/react-router) as the router.
- [Connected React Router](https://github.com/supasate/connected-react-router) to bind Redux with React Router. Refer to [document](https://github.com/supasate/connected-react-router/blob/master/FAQ.md#frequently-asked-questions) to see how it works.
- [TypeScript](https://www.typescriptlang.org) as the static variant checker for JavaScript.
- [Webpack](https://webpack.js.org) for app bundling.
- [Babel](https://babeljs.io) for transpile ES6+ to ES5.
- [React Refresh](https://github.com/facebook/react/tree/master/packages/react-refresh) to fast refresh components without losing their state.
- [react-helmet](https://github.com/nfl/react-helmet) to manage title, meta, styles and scripts tags on both server and client.
- [Webpack Bundle Analyzer](https://github.com/webpack-contrib/webpack-bundle-analyzer) creates a visualize size of webpack output files with an interactive zoomable treemap.
- [ESLint](http://eslint.org) to maintain a consistent TypeScript/JavaScript code style (with Airbnb configuration).
- [stylelint](http://stylelint.io) to maintain a consistent CSS/SASS code style.
- [Prettier](https://prettier.io) to format code and style.
- CSS and SASS support with [PostCSS](https://github.com/postcss/postcss-loader) for advanced transformations (e.g. autoprefixer, cssnext etc.). [CSS modules](https://github.com/css-Modules/css-Modules) enabled.
- Minimize JavaScript (by [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin)) and CSS (by [css-minimizer-webpack-plugin](https://github.com/webpack-contrib/css-minimizer-webpack-plugin)) bundles for you.
- Split vendor's libraries from client bundle.
- No other view engines, just JavaScript based HTML rendering component.
- Shared app configuration between development and production.
- Integrate [Jest](https://facebook.github.io/jest) with [React Testing Library](https://github.com/testing-library/react-testing-library) as the solution for writing unit tests with code coverage support.
- [Yarn](https://yarnpkg.com/lang/en) as the package manager.

## Requirements

- [node](https://nodejs.org/en) >= 12.0
- [npm](https://www.npmjs.com) >= 6.0

## Getting Started

**1. You can start by cloning the repository on your local machine by running:**

```sh
git clone https://git.crtweb.ru/creative/integration-hub/creative-integrator
cd creative-integrator
```

**2. Install all of the dependencies:**

```sh
yarn
```

**3. Create .env.local file**

You can copy example .env.example

**4. Start to run it:**

```sh
yarn dev
```

Now the app should be running at [http://localhost:3000](http://localhost:3000)

> Note: You can change the port that you want from the `./env.local`.

## Script Commands

[cross-env](https://github.com/kentcdodds/cross-env) to set and use environment variables across platforms. All of the scripts are listed as following:

| `yarn <script>` | Description                                                                       |
| --------------- | --------------------------------------------------------------------------------- |
| `dev`           | Runs your app on the development server at `localhost:3000`. HMR will be enabled. |
| `build`         | Bundles client-side files in production mode and put it to the `./public/assets`. |
| `analyze`       | Visualizes the bundle content of client-side.                                     |
| `lint`          | Lints all `.tsx?`, `.jsx?` and `.scss` files.                                     |
| `lint:code`     | Lints all `.tsx?` and `.jsx?` files (With `--fix` to auto fix eslint errors).     |
| `lint:variant`     | Runs variant checking for `.tsx?` files.                                             |
| `lint:style`    | Lints all `.scss` files (With `--fix` to auto fix stylelint errors).              |
| `lint:format`   | Formats all files except the file list of `.prettierignore`.                      |
| `test`          | Runs testing.                                                                     |
| `test:watch`    | Runs an interactive test watcher.                                                 |
| `test:cov`      | Runs testing with code coverage reports.                                          |
| `test:update`   | Updates jest snapshot.                                                            |
| `release:major` | Runs release as major.                                                            |
| `release:minor` | Runs release as minor.                                                            |
| `release:patch` | Runs release as patch.                                                            |

## App Structure

Here is the structure of the app, which serves as generally accepted guidelines and patterns for building scalable apps.

```
.
├── public                        # Webpack bundles output
│   ├── favicon.ico               # App favicon
│   ├── logo192.png               # App logo small
│   ├── logo512.png               # App logo large
│   └── manifest.json             # App favicon and logo manifest
├── src                           # App source code
│   ├── components                # Reusable components
│   ├── pages                     # Page components
│   ├── app                       # App root component
│   ├── store                     # Redux store creator, actions + reducers (a.k.a slice)
│   ├── services                  # API calls
│   ├── utils                     # App-wide utils (e.g. mock store creator for testing etc.)
│   ├── static                    # Static assets (e.g. index.html template, images, fonts etc.)
│   ├── theme                     # App-wide style and vendor CSS framework
│   ├── types                     # App-wide variant definitions
│   ├── client                    # App bootstrap and rendering (Webpack entry)
│   └── routes                    # Routes configuration for both client-side
├── webpack                       # Webpack configurations
├── jest                          # Jest configurations
├── babel.config.js               # Babel configuration
├── tsconfig.json                 # TypeScript configuration
├── postcss.config.js             # PostCSS configuration
├── .eslintrc.js                  # ESLint configuration
└── .stylelintrc.js               # stylelint configuration
```

## Overview

### Functional Components and Hooks

React v16.8 introduced a series of [Hooks](https://reactjs.org/docs/hooks-intro.html), which let you use state and other React features without writing a class. In the starter boilerplate, you can see the benefit of [functional components](https://reactjs.org/docs/components-and-props.html#function-and-class-components) + hook APIs to write a demo with clean code.

### Develop with Redux Toolkit

[Redux Toolkit](https://redux-toolkit.js.org) is the official, opinionated, batteries-included toolset for efficient Redux development. It includes several utility functions that simplify the most common Redux use cases. In a word, we can do more work with less code, start from the [tutorial](https://redux-toolkit.js.org/tutorials/basic-tutorial) to learn more about it.

- Supports [Redux Devtools Extension](https://github.com/zalmoxisus/redux-devtools-extension), you can follow the [installation guide](https://github.com/zalmoxisus/redux-devtools-extension#installation) to use it.
- Built-ins most commonly used Redux [middlewares](https://redux-toolkit.js.org/api/getDefaultMiddleware#included-default-middleware) for better DX, such as [Redux Thunk](https://github.com/reduxjs/redux-thunk), [Immer](https://immerjs.github.io/immer) etc.
- Provides useful [APIs](https://redux-toolkit.js.org/api/createReducer) for better development efficiency. We can even create entire [slices](https://redux-toolkit.js.org/api/createSlice) of state at once without writing any action creators or action types by hand.
- Integrates the [Reselect library](https://github.com/reduxjs/reselect) for optimizing the performance of your React + Redux app.

Let's see how powerful it is by a simple asynchronous data fetching example:

```js
import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  readyStatus: 'invalid',
  items: [],
  error: null,
}

const userList = createSlice({
  // A name for action types
  name: 'userList',
  initialState,
  // An object of "case reducers", key names will be used to generate actions
  reducers: {
    getRequesting: (state) => {
      // Write an immutable updated state by a mutable way, thanks to the built-in Immer middleware
      state.readyStatus = 'request'
    },
    getSuccess: (state, { payload }) => {
      state.readyStatus = 'success'
      state.items = payload
    },
    getFailure: (state, { payload }) => {
      state.readyStatus = 'failure'
      state.error = payload
    },
  },
})

// We can get the "reducer" and "actions" from the slice instance
export default userList.reducer
const { getRequesting, getSuccess, getFailure } = userList.actions

export const fetchUserList = () => async (dispatch) => {
  dispatch(getRequesting())

  try {
    const { data } = await axios('/api/users')

    // Dispatch the action once data is ready via the built-in Redux Thunk middleware
    dispatch(getSuccess(data))
  } catch (error) {
    dispatch(getFailure(error.message))
  }
}
```

### Adding Routes

This starter use [React Router](https://reacttraining.com/react-router) library to manage our routes. Routes in a centralized [Route Config](https://reacttraining.com/react-router/web/example/route-config). You can setup your routes in the `./src/routes/index.ts`. For example:

```js
import PageComponent from '../pages/PageComponent'

export default [
  {
    // Define your route path
    path: '/top-path',
    // If the route matches the location.pathname exactly or not (used for index route usually)
    exact: true,
    // Add your page component here
    component: PageComponent,
    // Add your sub route component here
    routes: [
      {
        path: '/top-path/sub-path',
        component: SubComponent,
      },
    ],
  },
  // Other routes...
]
```

### Code Splitting

```
 └─ pages
    └─ SomePage
       |- PageComponent.tsx  // The page component
       └─ index.tsx          // Wrap the component into async component
```

The `index.tsx` will be:

```js
import { lazy, Suspense } from 'react'

import { Error, Loading } from '../../components'

// Dynamically import your page component
const AsyncPage = lazy(() => import('./PageComponent'))

export default (props) => (
  // Wrap an <ErrorBoundary /> to catch the error of <AsyncPage /> (via "componentDidCatch()" life cycle)
  // <Loading /> will be displayed when the component is being loaded
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>
      <AsyncPage {...props} />
    </Suspense>
  </ErrorBoundary>
)
```

Then you can [setup](#adding-routes) the route as usual.

### Managing Title, Meta, Styles and Scripts

See the [react-helmet](https://github.com/nfl/react-helmet) document for more info.

### Styles

The starter supports CSS, SASS and [CSS modules](https://github.com/css-Modules/css-Modules) is auto enabled for all files the `[name].module.*` naming convention. Use [PostCSS](https://github.com/postcss/postcss-loader) plugin to parse CSS and add autoprefixer to your stylesheet. You can access your stylesheet with two ways.

With CSS modules:

```js
import styles from './styles.module.scss'

// ...

return (
  <div className={styles.myClass}>
    {/* The className matches one of CSS classes in your .scss file */}
    <Helmet title="My title" />
    {this.renderContent()}
  </div>
)
```

Without CSS modules:

```js
import './styles.scss'

// ...

return (
  <div className="myClass">
    {/* Use the CSS class as normal */}
    <Helmet title="My title" />
    {this.renderContent()}
  </div>
)
```

By the way, if you want to use vendor CSS frameworks or global styles, just import it through the `./src/app/index.tsx` file (app root component). For example:

```js
import "../../theme/normalize.css"; // Import the vendor stylesheet first
import styles from "./styles.scss"; // Then your based stylesheet

const App = ({ route }) => (
  // ...
};
```

### Image and Font

It's super easy to render the image and font both on client, the usage would be like below.

Using image:

```js
import logo from '../static/logo.svg'
;<img src={logo} alt="Logo" role="presentation" />
```

Using font-awesome:

```js
// With CSS modules
import styles from './styles.scss'

// ...

return (
  <div>
    <div>
      <i className={styles.iconUser} /> User
    </div>
  </div>
)

// Without CSS modules
import './font-awesome.css'

// ...

return (
  <div>
    <div>
      <i className="fa fa-icon" /> User
    </div>
  </div>
)
```

For using CSS modules, you have to set the proper font path in your scss/sass file:

```scss
$fa-font-path: '../node_modules/font-awesome/fonts';
@import '../node_modules/font-awesome/scss/font-awesome';

.icon-user {
  @extend .fa;
  @extend .fa-user;
}
```

### Boost App Performance

[React.memo](https://reactjs.org/blog/2018/10/23/react-v-16-6.html#reactmemo) to demonstrate the basic performance optimizing for React app.

```js
import { memo } from 'react'

const MyComponent = memo((props) => {
  // Only re-renders if props change
})
```

- In addition, you can also use React hooks like [useMemo](https://reactjs.org/docs/hooks-reference.html#usememo) or [useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback) to avoid expensive calculations on every render:

```js
import { useMemo, useCallback } from 'react'

// Performance optimizing via useMemo()
const ParentComponent = (props) => (
  <div>
    {/* Only re-renders if "a" change */}
    {useMemo(
      () => (
        <ChildComponent someProp={a} />
      ),
      [a],
    )}
  </div>
)

// Performance optimizing via useCallback()
const ParentComponent = (props) => (
  <div>
    {/* Return a memorized callback that only changes if "a" changed */}
    {/* This is useful to prevent child component from unnecessary renders */}
    <ChildComponent
      callback={useCallback(() => {
        doSomething(a)
      }, [a])}
    />
  </div>
)
```

> For more performance optimizing techniques. Please see the [Optimizing Performance](https://reactjs.org/docs/optimizing-performance.html) topic.

### TypeScript

[TypeScript](https://www.typescriptlang.org) is a typed super-set of JavaScript. It's getting more and more popular in the Front-end world. And being widely used by many libraries. If you are new to TypeScript, you can check out its document [here](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html).

TypeScript has been integrated with our application to bring the following benefits:

- Type safety for components, reducers, state and actions.
- Many IDEs support the hints of TypeScript, which give us a superior developer experience.
- Easy refactoring of typed code.
- In general, more types less bugs. Read this [article](https://medium.com/javascript-scene/the-typescript-tax-132ff4cb175b) to learn more.

### Code and Style Lint

[ESLint](http://eslint.org) (with Airbnb configuration), [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint), [stylelint](http://stylelint.io), [Prettier](https://prettier.io) and [lint-staged](https://github.com/okonet/lint-staged) are integrated into this starter to maintain a consistent code style and give you a elegant code formatting. You can configure your lint rules through the `.eslintrc.js`, `.stylelintrc.js`, and [prettier configuration file](https://prettier.io/docs/en/configuration.html).

### Unit Testing

This starter use [Jest](https://facebook.github.io/jest) as the testing framework. We also use [React Testing Library](https://github.com/testing-library/react-testing-library) with [jest-dom](https://github.com/testing-library/jest-dom), give you a simple and complete React DOM testing utilities that encourage good testing practices.

Jest support the feature of [snapshot testing](https://jestjs.io/docs/en/snapshot-testing), which is very powerful for testing React component. Give it a try, you'll be impressed. The unit testing focus on three parts as below:

- Components
- Actions
- Reducers

By the way, Jest built-in code coverage reports, the report files are generated in the `./coverage` folder. You can configure the `./jest/config.js` to define which files that you want to cover. For example:

```js
module.exports = {
  collectCoverageFrom: [
    'src/pages/**/*.tsx', // Define the files, which want to be covered
    '!src/pages/index.ts', // The files will be ignored by code coverage
  ],
  // Other configurations...
}
```

You can also use [istanbul's ignore hints](https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes) to specify specific lines of code in a JavaScript file to skip code coverage.

### How to Deploy

- deploy/production.Dockerfile for building production image with alpine nginx.
- /deploy/k8s contains yaml configuration for kubernetes

You can run production build on your local machine using docker-compose.yml

```sh
cd deploy
docker-compose up -d
```
# uikit
# uikit
# uikit
# uikit
