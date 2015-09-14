eslint-config-ezhome
====================

This package provides Ezhome's `.eslintrc` as an extensible shared config.

Usage
=====

1. `npm install --save-dev eslint-config-ezhome`
2. Add `"extends": "ezhome"` to your `.eslintrc`

Other Configs
=============

ezhome/base
-----------

Use `ezhome/base` config in case your project still heavilly uses ES5 features.
In other words, if your project still uses `var` statement you need to use this
config.

ezhome/alternate
----------------

Alternate config which provides comma-dangling and uses 2 spaces for indent in
JS and JSX files. Good config to new projects.
