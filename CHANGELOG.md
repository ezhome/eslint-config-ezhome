0.3.0 (2015-09-24)
==================

Final release after 2 betas and 2 release candidates. No changes compared
to `0.3.0-rc2`.

0.3.0-rc2 (2015-09-21)
----------------------

* Bump requirements, now `eslint-config-ezhome` requires ESLint 1.5.0 and
  ESLint React plugin 3.4.2
* Add new `react/jsx-closing-bracket-location` rule
* Use `jsx-quotes` instead of `react/jsx-quotes` rule

0.3.0-rc1 (2015-09-14)
----------------------

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

0.3.0-beta2 (2015-09-05)
------------------------

* Fixes to previous beta release

0.3.0-beta (2015-09-05)
-----------------------

* Update ESLint React rules by:
  * Adding `react/jsx-curly-spacing` rule
  * Adding `react/jsx-indent-props` rule
  * Adding `react/jsx-no-duplicate-props` rule
  * Adding `react/jsx-sort-props` rule

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
