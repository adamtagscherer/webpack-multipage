# Webpack Multipage

Bundle your multipage application assets with this webpack configuration.

## Introduction

This configuration is proper for building multipage web application frontend. You can write your BEM blocks with the associated assets under the /dev/blocks/ directory and include them in /dev/pages/ wherever you need them. Anything related to a single block should be included under it's own directory.

The configuration is capable of:

* Transpile ES5+ to ES5.
* Transpile SCSS to CSS.
* Built in eslint with airbnb-base.

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/en/) - Fresh version of Node.js.

### Installing

To install the latest release version with npm, run the following command:

```
npm install @adamtagscherer/webpack-multipage
```

### Run

To start the application in development mode, run:

```
npm run start
```

To run in production:

```
npm run build
```
