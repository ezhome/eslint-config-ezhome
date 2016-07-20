eslint-config-ezhome
====================

![Circle CI](https://circleci.com/gh/ezhome/eslint-config-ezhome.svg?style=svg)
[![npm version](https://img.shields.io/npm/v/eslint-config-ezhome.svg?style=flat-square)](https://www.npmjs.com/packages/eslint-config-ezhome)
[![npm license](https://img.shields.io/npm/l/eslint-config-ezhome.svg?style=flat-square)](https://www.npmjs.com/packages/eslint-config-ezhome)

This package provides Ezhome's `.eslintrc` as an extensible shared config.

## Usage

1. Install `eslint-config-ezhome` and some other ESLint dev dependencies as,

   ```
   npm install --save-dev eslint babel-eslint esling-plugin-import-order eslint-plugin-react eslint-config-ezhome
   ```

   If your project doesn't use React, you don't need to install
   `eslint-plugin-react` dev dep.

2. Add `"extends": "ezhome"` to your `.eslintrc`

### Note on preferred ESLint versions

As of `1.0.0` release, `eslint-config-ezhome` prefers:

* `eslint@3.1.1`
* `babel-eslint@6.1.2`
* `eslint-plugin-import-order@2.1.4`
* `eslint-plugin-react@5.2.2`

You still able to install other versions of ESLint packages, but we recommend
use versions listed above.

## Other Configs

### ezhome/base

Use `ezhome/base` config in case your project still heavilly uses ES5 features.
In other words, if your project still uses `var` statement you need to use this
config.

### ezhome/alternate

Alternate config which provides comma-dangling and uses 2 spaces for indent in
JS and JSX files. Good config to new projects.
