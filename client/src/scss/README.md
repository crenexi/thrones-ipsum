# Sass setup

## Modules

There are three key modules:

* `~scss/utils` (variables, mixins, and functions)
* `~scss/common` (re-used styles across components)
* `~scss/core` (imported once in `main.jsx`)

## Utils Module

**Note: `_utils.scss` should compile to zero CSS**

There are variables, mixins, and functions provided in the `_utils.scss` module. Furthermore, all variables (should) be exported in the `_exports.scss` module (for use in JS).

To import the utilities (ex. in `App.scss`):

```
@import '~scss/utils';
```

### Variable Exports

To import the exports (i.e. variables):

```
@import `~scss/utils/exports`;
```

### Dependencies

The `_utils.scss` module includes the following dependencies:

* [node-bourbon](https://www.npmjs.com/package/node-bourbon)

