# 1.0.0 (Not Released Yet)

## 1.0.0-beta.8 (2016-08-24)

* Disable `eslint-plugin-import` as it breaks Sublime Text & Atom ESLint
  integration. Return `eslint-plugin-import-order` plugin back.

## 1.0.0-beta.7 (2016-08-24)

* Bump:
  * `eslint` to `3.3.1`
  * `eslint-plugin-react` to `6.1.2`
* New rules:
  * `no-irregular-whitespace`
  * `no-multi-spaces`
  * `no-whitespace-before-property`
  * `operator-linebreak`
  * `react/no-find-dom-node`
  * `react/no-danger-with-children`
* Integrate [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import)
  as it more powerful then `eslint-plugin-import-order`
* Disable `eslint-plugin-import-order`
* Remove `object-assign` from project dependencies
* Move to node.js `v4.5.0` for development

## 1.0.0-beta.6 (2016-07-29)

* Fix `react/no-string-refs` rule in `ezhome/alternate` config.

## 1.0.0-beta.5 (2016-07-29)

* Require node.js 4 LTS or higher and npm 3 to use `eslint-config-ezhome`
* Install ESLint dependencies via `package.json`, which results in unnecessary
  to install them via `devDependencies`
* New rule to `ezhome/alternate` config:
  * `react/jsx-no-string-refs`

## 1.0.0-beta.4 (2016-07-20)

* Enable [eslint-plugin-import-order](https://github.com/jfmengels/eslint-plugin-import-order)
  plugin
* New rules:
  * `react/jsx-indent`
  * `react/no-deprecated`

## 1.0.0-beta.3 (2016-07-20)

* Set maximum line length to 120 characters in alternate config

## 1.0.0-beta.2 (2016-06-22)

* Update rules for ternary operator.

## 1.0.0-beta.1 (2016-05-12)

* Migrate to node@4.4.3, eslint@2.9.0, babel-eslint@6.0.2 and
  eslint-plugin-react@5.1.1

# 0.6.1 (2015-12-18)

* Fix config for non-React projects. Do not list `react` plugin if it not
  installed.

# 0.6.0 (2015-12-18)

* Enable `eslint-plugin-react` rules only if plugin installed and available

# 0.5.0 (2015-12-02)

* Moved `react/jsx-handler-names` rule to `ezhome/alternate` config
* Increase maximum of props for one line in `react/jsx-max-props-per-line` rule
  to 4
* Removed `.eslintrc` from the repo, put default config as `eslintConfig`
  object to `package.json`

## 0.5.0-beta (2015-12-02)

* Disable `no-eq-null` rule
* Update ESLint required version to 1.10.3 and ESLint react Plugin to 3.11.2
* New rules:
  * `react/jsx-handler-names`
  * `react/jsx-key`
  * `react/jsx-max-props-per-line`
  * `react/jsx-pascal-case`
  * `react/no-direct-mutation-state`

# 0.4.0 (2015-10-29)

* Add `react/prefer-es6-class` rule
* List preferred versions for ESLint stack dependencies

# 0.3.0 (2015-09-24)

Final release after 2 betas and 2 release candidates. No changes compared
to `0.3.0-rc2`.

## 0.3.0-rc2 (2015-09-21)

* Bump requirements, now `eslint-config-ezhome` requires ESLint 1.5.0 and
  ESLint React plugin 3.4.2
* Add new `react/jsx-closing-bracket-location` rule
* Use `jsx-quotes` instead of `react/jsx-quotes` rule

## 0.3.0-rc1 (2015-09-14)

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

## 0.3.0-beta2 (2015-09-05)

* Fixes to previous beta release

## 0.3.0-beta (2015-09-05)

* Update ESLint React rules by:
  * Adding `react/jsx-curly-spacing` rule
  * Adding `react/jsx-indent-props` rule
  * Adding `react/jsx-no-duplicate-props` rule
  * Adding `react/jsx-sort-props` rule

# 0.2.0 (2015-08-30)

* Fix ESLint config by:
  * Adding `eol-last` rule
  * Adding `no-class-assing` rule
  * Adding `no-multiple-empty-lines` rule
  * Adding `no-trailing-spaces` rule
  * Adding `semi` rule
  * Adding `spaced-comment` rule

# 0.1.0 (2015-08-20)

* Initial Release
