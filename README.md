eslint-config-ezhome
====================

![Circle CI](https://circleci.com/gh/ezhome/eslint-config-ezhome.svg?style=svg)
[![npm version](https://img.shields.io/npm/v/eslint-config-ezhome.svg?style=flat-square)](https://www.npmjs.com/packages/eslint-config-ezhome)
[![npm license](https://img.shields.io/npm/l/eslint-config-ezhome.svg?style=flat-square)](https://www.npmjs.com/packages/eslint-config-ezhome)

This package provides Ezhome's `.eslintrc` as an extensible shared config.

## Requirements

As of `1.0.0` release `eslint-config-ezhome` requires,

* [node.js](https://www.nodejs.org/) 4.4 or later
* [npm](https://www.npmjs.com/) 3.10 or later

## Usage

1. Install `eslint-config-ezhome` and some other ESLint dev dependencies as,

   ```
   npm install --save-dev eslint-config-ezhome
   ```

2. Add `"extends": "ezhome"` to your `.eslintrc`

### Note on preferred ESLint versions

As of `1.0.0` release, `eslint-config-ezhome` installs:

* `eslint@3.3.1`
* `babel-eslint@6.1.2`
* `eslint-plugin-import@1.14.0`
* `eslint-plugin-react@6.1.2`

as its requirements. You still able to install other versions of ESLint
packages, but we recommend use versions listed above.

## Other Configs

### ezhome/base

Use `ezhome/base` config in case your project still heavilly uses ES5 features.
In other words, if your project still uses `var` statement you need to use this
config.

### ezhome/alternate

Alternate config which provides comma-dangling and uses 2 spaces for indent in
JS and JSX files. Good config to new projects.
