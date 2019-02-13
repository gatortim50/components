# Web Components
This repository contains reusable web components that can be imported by applications in order to provide a uniform UI experience for Medable applications.

## Components
This library is under development and components are expected to change.  An up to date list of the exposed components can be found [here](https://gitlab.medable.com/product/web/components/blob/development/src/index.js).


### Theming
These web components use the [`styled-components`](https://www.styled-components.com/) & [`styled-system`](https://github.com/jxnblk/styled-system/blob/master/README.md) libraries, and support theming.  A custom theme can be provided by simply wrapping the application with a `styled-components` `ThemeProvider` object.  More information on how to use the `ThemeProvider` can be found [here](https://www.styled-components.com/docs/advanced#theming).


#### CSS Overrides
In order to support further customization `CSS` overrides can be specified following the `styled-components` [guidelines](https://www.styled-components.com/docs/advanced#existing-css).

## Development
Active development and merge requests happen on the `development` branch.

### Pre-requisites:
 * `node`
 * `npm`

### Steps to setup the local repository
```js
// Clone the repository
git clone git@github.com:gatortim50/components.git web-components


// Move into the web-components directory
cd web-components

// Use development branch
git checkout development

// Install depedencies
npm install

// Start and opens storybook browser window, which showcases the different components
npm run dev
```

### Testing
```js
// Runs all tests
npm run test 

// When modifying components / styles it may be necessary to update the test snapshots
// Make sure that an update is actually expected and necessary.
npm run test -- -u
```

### Building

```js
// Builds the `ES` bundle
npm run build

// Alternatively you can watch for changes and automatically rebuild the `ES` bundle using
npm run watch
```
