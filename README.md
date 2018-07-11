# stylelint-config-itp

[![NPM version][npm-version-image]][npm-url] [![MIT License][license-image]][license-url]

> In The Pocket's default configuration for [Stylelint](https://github.com/stylelint/stylelint).

The current configuration is a hard copy of [Bootstrap's latest Stylelint configuration](https://github.com/twbs/bootstrap/blob/v4-dev/.stylelintrc). We didn't make any changes to it and like to keep it that way to avoid any discussions and keep this maintainable. Whenever Bootstrap decides to make changes, we need to make changes, that's the idea.

[PR](https://bitbucket.org/inthepocket/stylelint-config-itp/pull-requests/1) with more info.

Extends [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) and [stylelint-config-recommended-scss](https://github.com/kristerkari/stylelint-config-recommended-scss)

Plugins used: [stylelint-order](https://github.com/hudochenkov/stylelint-order)

## Usage

Install the following packages in your project:

```sh
npm install stylelint-config-itp stylelint husky lint-staged --save-dev
```

Add .stylelintrc to the root of your project:

```js
{
  "extends": "stylelint-config-itp"
}
```

Add .stylelintignore (if you need one) to the root of your project:

```text
**/*.min.css
**/dist/
**/vendor/
/_gh_pages/
```

Update your package.json:

```js
{
  "scripts": {
+   "precommit": "lint-staged"
  },
+ "lint-staged": {
+   "*.{css,scss}": ["stylelint --fix", "git add"]
+ }
}
```

[license-image]: http://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: LICENSE

[npm-url]: https://npmjs.org/package/stylelint-config-itp
[npm-version-image]: http://img.shields.io/npm/v/stylelint-config-itp.svg?style=flat
[npm-downloads-image]: http://img.shields.io/npm/dm/stylelint-config-itp.svg?style=flat
