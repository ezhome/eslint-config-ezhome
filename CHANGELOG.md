0.3.0 (Unreleased)
==================

* Update ESLint React rules by:
  * Adding `react/jsx-curly-spacing` rule
  * Adding `react/jsx-indent-props` rule
  * Adding `react/jsx-no-duplicate-props` rule
  * Adding `react/jsx-sort-props` rule
* Move `ezhome` to `ezhome/base` config. This config should be used to projects
  that still uses ES5.
* New rules to `ezhome` config:
  * Add `no-var` rule
  * Add `object-shorthand` rule
  * Add `prefer-const` rule
  * Add `prefer-template` rule
* This adds more ES6/ES2015 taste to our default ESLint configuration.
* Provide alternate config which enables comma-dangling and uses 2 spaces for
  indent in JS and JSX blocks. This config now available as `ezhome/alternate`.

0.2.0 (2015-08-30)
==================

* Fix ESLint config by:
  * Adding `eol-last` rule
  * Adding `no-class-assing` rule
  * Adding `no-multiple-empty-lines` rule
  * Adding `no-trailing-spaces` rule
  * Adding `semi` rule
  * Adding `spaced-comment` rule

0.1.0 (2015-08-20)
==================

* Initial Release
