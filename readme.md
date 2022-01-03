# eslint-plugin-unicorn [![Coverage Status](https://codecov.io/gh/sindresorhus/eslint-plugin-unicorn/branch/main/graph/badge.svg)](https://codecov.io/gh/sindresorhus/eslint-plugin-unicorn/branch/main) [![npm version](https://img.shields.io/npm/v/eslint-plugin-unicorn.svg?style=flat)](https://npmjs.com/package/eslint-plugin-unicorn)

<!-- markdownlint-disable-next-line no-inline-html -->
<img src="https://cloud.githubusercontent.com/assets/170270/18659176/1cc373d0-7f33-11e6-890f-0ba35362ee7e.jpg" width="180" align="right">

> Various awesome ESLint rules

> ⚠️ This is a fork of [`sindresorhus/eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) with the `explicit-length-check` rule's `greater-than-or-equal` option retained. Read more about why this option was removed by the original authors and why we chose to keep using this style [in the original GitHub issue discussions](https://github.com/sindresorhus/eslint-plugin-unicorn/issues/957).

You might want to check out [XO](https://github.com/xojs/xo), which includes this plugin.

[**Propose or contribute a new rule ➡**](.github/contributing.md)

## Install

```sh
npm install --save-dev eslint @rinfel/eslint-plugin-unicorn
```

## Usage

Configure it in `package.json`.

<!-- Do not manually modify this table. Run: `npm run generate-usage-example` -->
<!-- USAGE_EXAMPLE_START -->
```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"env": {
			"es6": true
		},
		"parserOptions": {
			"ecmaVersion": "latest",
			"sourceType": "module"
		},
		"plugins": [
			"@rinfel/unicorn"
		],
		"rules": {
			"@rinfel/unicorn/better-regex": "error",
			"@rinfel/unicorn/catch-error-name": "error",
			"@rinfel/unicorn/consistent-destructuring": "error",
			"@rinfel/unicorn/consistent-function-scoping": "error",
			"@rinfel/unicorn/custom-error-definition": "off",
			"@rinfel/unicorn/empty-brace-spaces": "error",
			"@rinfel/unicorn/error-message": "error",
			"@rinfel/unicorn/escape-case": "error",
			"@rinfel/unicorn/expiring-todo-comments": "error",
			"@rinfel/unicorn/explicit-length-check": "error",
			"@rinfel/unicorn/filename-case": "error",
			"@rinfel/unicorn/import-index": "off",
			"@rinfel/unicorn/import-style": "error",
			"@rinfel/unicorn/new-for-builtins": "error",
			"@rinfel/unicorn/no-abusive-eslint-disable": "error",
			"@rinfel/unicorn/no-array-callback-reference": "error",
			"@rinfel/unicorn/no-array-for-each": "error",
			"@rinfel/unicorn/no-array-method-this-argument": "error",
			"@rinfel/unicorn/no-array-push-push": "error",
			"@rinfel/unicorn/no-array-reduce": "error",
			"@rinfel/unicorn/no-await-expression-member": "error",
			"@rinfel/unicorn/no-console-spaces": "error",
			"@rinfel/unicorn/no-document-cookie": "error",
			"@rinfel/unicorn/no-empty-file": "error",
			"@rinfel/unicorn/no-for-loop": "error",
			"@rinfel/unicorn/no-hex-escape": "error",
			"@rinfel/unicorn/no-instanceof-array": "error",
			"@rinfel/unicorn/no-invalid-remove-event-listener": "error",
			"@rinfel/unicorn/no-keyword-prefix": "off",
			"@rinfel/unicorn/no-lonely-if": "error",
			"no-nested-ternary": "off",
			"@rinfel/unicorn/no-nested-ternary": "error",
			"@rinfel/unicorn/no-new-array": "error",
			"@rinfel/unicorn/no-new-buffer": "error",
			"@rinfel/unicorn/no-null": "error",
			"@rinfel/unicorn/no-object-as-default-parameter": "error",
			"@rinfel/unicorn/no-process-exit": "error",
			"@rinfel/unicorn/no-static-only-class": "error",
			"@rinfel/unicorn/no-thenable": "error",
			"@rinfel/unicorn/no-this-assignment": "error",
			"@rinfel/unicorn/no-unreadable-array-destructuring": "error",
			"@rinfel/unicorn/no-unsafe-regex": "off",
			"@rinfel/unicorn/no-unused-properties": "off",
			"@rinfel/unicorn/no-useless-fallback-in-spread": "error",
			"@rinfel/unicorn/no-useless-length-check": "error",
			"@rinfel/unicorn/no-useless-promise-resolve-reject": "error",
			"@rinfel/unicorn/no-useless-spread": "error",
			"@rinfel/unicorn/no-useless-undefined": "error",
			"@rinfel/unicorn/no-zero-fractions": "error",
			"@rinfel/unicorn/number-literal-case": "error",
			"@rinfel/unicorn/numeric-separators-style": "error",
			"@rinfel/unicorn/prefer-add-event-listener": "error",
			"@rinfel/unicorn/prefer-array-find": "error",
			"@rinfel/unicorn/prefer-array-flat": "error",
			"@rinfel/unicorn/prefer-array-flat-map": "error",
			"@rinfel/unicorn/prefer-array-index-of": "error",
			"@rinfel/unicorn/prefer-array-some": "error",
			"@rinfel/unicorn/prefer-at": "off",
			"@rinfel/unicorn/prefer-code-point": "error",
			"@rinfel/unicorn/prefer-date-now": "error",
			"@rinfel/unicorn/prefer-default-parameters": "error",
			"@rinfel/unicorn/prefer-dom-node-append": "error",
			"@rinfel/unicorn/prefer-dom-node-dataset": "error",
			"@rinfel/unicorn/prefer-dom-node-remove": "error",
			"@rinfel/unicorn/prefer-dom-node-text-content": "error",
			"@rinfel/unicorn/prefer-export-from": "error",
			"@rinfel/unicorn/prefer-includes": "error",
			"@rinfel/unicorn/prefer-json-parse-buffer": "error",
			"@rinfel/unicorn/prefer-keyboard-event-key": "error",
			"@rinfel/unicorn/prefer-math-trunc": "error",
			"@rinfel/unicorn/prefer-modern-dom-apis": "error",
			"@rinfel/unicorn/prefer-module": "error",
			"@rinfel/unicorn/prefer-negative-index": "error",
			"@rinfel/unicorn/prefer-node-protocol": "error",
			"@rinfel/unicorn/prefer-number-properties": "error",
			"@rinfel/unicorn/prefer-object-from-entries": "error",
			"@rinfel/unicorn/prefer-optional-catch-binding": "error",
			"@rinfel/unicorn/prefer-prototype-methods": "error",
			"@rinfel/unicorn/prefer-query-selector": "error",
			"@rinfel/unicorn/prefer-reflect-apply": "error",
			"@rinfel/unicorn/prefer-regexp-test": "error",
			"@rinfel/unicorn/prefer-set-has": "error",
			"@rinfel/unicorn/prefer-spread": "error",
			"@rinfel/unicorn/prefer-string-replace-all": "off",
			"@rinfel/unicorn/prefer-string-slice": "error",
			"@rinfel/unicorn/prefer-string-starts-ends-with": "error",
			"@rinfel/unicorn/prefer-string-trim-start-end": "error",
			"@rinfel/unicorn/prefer-switch": "error",
			"@rinfel/unicorn/prefer-ternary": "error",
			"@rinfel/unicorn/prefer-top-level-await": "off",
			"@rinfel/unicorn/prefer-type-error": "error",
			"@rinfel/unicorn/prevent-abbreviations": "error",
			"@rinfel/unicorn/relative-url-style": "error",
			"@rinfel/unicorn/require-array-join-separator": "error",
			"@rinfel/unicorn/require-number-to-fixed-digits-argument": "error",
			"@rinfel/unicorn/require-post-message-target-origin": "off",
			"@rinfel/unicorn/string-content": "off",
			"@rinfel/unicorn/template-indent": "warn",
			"@rinfel/unicorn/throw-new-error": "error"
		}
	}
}
```
<!-- USAGE_EXAMPLE_END -->

## Rules

Each rule has emojis denoting:

- ✅ if it belongs to the `recommended` configuration
- 🔧 if some problems reported by the rule are automatically fixable by the `--fix` [command line](https://eslint.org/docs/user-guide/command-line-interface#fixing-problems) option
- 💡 if some problems reported by the rule are manually fixable by editor [suggestions](https://eslint.org/docs/developer-guide/working-with-rules#providing-suggestions)

<!-- Do not manually modify this table. Run: `npm run generate-rules-table` -->
<!-- RULES_TABLE_START -->

| Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Description | ✅ | 🔧 | 💡 |
| :-- | :-- | :-- | :-- | :-- |
| [better-regex](docs/rules/better-regex.md) | Improve regexes by making them shorter, consistent, and safer. | ✅ | 🔧 |  |
| [catch-error-name](docs/rules/catch-error-name.md) | Enforce a specific parameter name in catch clauses. | ✅ | 🔧 |  |
| [consistent-destructuring](docs/rules/consistent-destructuring.md) | Use destructured variables over properties. | ✅ | 🔧 | 💡 |
| [consistent-function-scoping](docs/rules/consistent-function-scoping.md) | Move function definitions to the highest possible scope. | ✅ |  |  |
| [custom-error-definition](docs/rules/custom-error-definition.md) | Enforce correct `Error` subclassing. |  | 🔧 |  |
| [empty-brace-spaces](docs/rules/empty-brace-spaces.md) | Enforce no spaces between braces. | ✅ | 🔧 |  |
| [error-message](docs/rules/error-message.md) | Enforce passing a `message` value when creating a built-in error. | ✅ |  |  |
| [escape-case](docs/rules/escape-case.md) | Require escape sequences to use uppercase values. | ✅ | 🔧 |  |
| [expiring-todo-comments](docs/rules/expiring-todo-comments.md) | Add expiration conditions to TODO comments. | ✅ |  |  |
| [explicit-length-check](docs/rules/explicit-length-check.md) | Enforce explicitly comparing the `length` or `size` property of a value. | ✅ | 🔧 | 💡 |
| [filename-case](docs/rules/filename-case.md) | Enforce a case style for filenames. | ✅ |  |  |
| [import-index](docs/rules/import-index.md) | Enforce importing index files with `.`. |  | 🔧 |  |
| [import-style](docs/rules/import-style.md) | Enforce specific import styles per module. | ✅ |  |  |
| [new-for-builtins](docs/rules/new-for-builtins.md) | Enforce the use of `new` for all builtins, except `String`, `Number`, `Boolean`, `Symbol` and `BigInt`. | ✅ | 🔧 |  |
| [no-abusive-eslint-disable](docs/rules/no-abusive-eslint-disable.md) | Enforce specifying rules to disable in `eslint-disable` comments. | ✅ |  |  |
| [no-array-callback-reference](docs/rules/no-array-callback-reference.md) | Prevent passing a function reference directly to iterator methods. | ✅ |  | 💡 |
| [no-array-for-each](docs/rules/no-array-for-each.md) | Prefer `for…of` over `Array#forEach(…)`. | ✅ | 🔧 |  |
| [no-array-method-this-argument](docs/rules/no-array-method-this-argument.md) | Disallow using the `this` argument in array methods. | ✅ | 🔧 | 💡 |
| [no-array-push-push](docs/rules/no-array-push-push.md) | Enforce combining multiple `Array#push()` into one call. | ✅ | 🔧 | 💡 |
| [no-array-reduce](docs/rules/no-array-reduce.md) | Disallow `Array#reduce()` and `Array#reduceRight()`. | ✅ |  |  |
| [no-await-expression-member](docs/rules/no-await-expression-member.md) | Forbid member access from await expression. | ✅ | 🔧 |  |
| [no-console-spaces](docs/rules/no-console-spaces.md) | Do not use leading/trailing space between `console.log` parameters. | ✅ | 🔧 |  |
| [no-document-cookie](docs/rules/no-document-cookie.md) | Do not use `document.cookie` directly. | ✅ |  |  |
| [no-empty-file](docs/rules/no-empty-file.md) | Disallow empty files. | ✅ |  |  |
| [no-for-loop](docs/rules/no-for-loop.md) | Do not use a `for` loop that can be replaced with a `for-of` loop. | ✅ | 🔧 |  |
| [no-hex-escape](docs/rules/no-hex-escape.md) | Enforce the use of Unicode escapes instead of hexadecimal escapes. | ✅ | 🔧 |  |
| [no-instanceof-array](docs/rules/no-instanceof-array.md) | Require `Array.isArray()` instead of `instanceof Array`. | ✅ | 🔧 |  |
| [no-invalid-remove-event-listener](docs/rules/no-invalid-remove-event-listener.md) | Prevent calling `EventTarget#removeEventListener()` with the result of an expression. | ✅ |  |  |
| [no-keyword-prefix](docs/rules/no-keyword-prefix.md) | Disallow identifiers starting with `new` or `class`. |  |  |  |
| [no-lonely-if](docs/rules/no-lonely-if.md) | Disallow `if` statements as the only statement in `if` blocks without `else`. | ✅ | 🔧 |  |
| [no-nested-ternary](docs/rules/no-nested-ternary.md) | Disallow nested ternary expressions. | ✅ | 🔧 |  |
| [no-new-array](docs/rules/no-new-array.md) | Disallow `new Array()`. | ✅ | 🔧 | 💡 |
| [no-new-buffer](docs/rules/no-new-buffer.md) | Enforce the use of `Buffer.from()` and `Buffer.alloc()` instead of the deprecated `new Buffer()`. | ✅ | 🔧 | 💡 |
| [no-null](docs/rules/no-null.md) | Disallow the use of the `null` literal. | ✅ | 🔧 | 💡 |
| [no-object-as-default-parameter](docs/rules/no-object-as-default-parameter.md) | Disallow the use of objects as default parameters. | ✅ |  |  |
| [no-process-exit](docs/rules/no-process-exit.md) | Disallow `process.exit()`. | ✅ |  |  |
| [no-static-only-class](docs/rules/no-static-only-class.md) | Forbid classes that only have static members. | ✅ | 🔧 |  |
| [no-thenable](docs/rules/no-thenable.md) | Disallow `then` property. | ✅ |  |  |
| [no-this-assignment](docs/rules/no-this-assignment.md) | Disallow assigning `this` to a variable. | ✅ |  |  |
| [no-unreadable-array-destructuring](docs/rules/no-unreadable-array-destructuring.md) | Disallow unreadable array destructuring. | ✅ | 🔧 |  |
| [no-unsafe-regex](docs/rules/no-unsafe-regex.md) | Disallow unsafe regular expressions. |  |  |  |
| [no-unused-properties](docs/rules/no-unused-properties.md) | Disallow unused object properties. |  |  |  |
| [no-useless-fallback-in-spread](docs/rules/no-useless-fallback-in-spread.md) | Forbid useless fallback when spreading in object literals. | ✅ | 🔧 |  |
| [no-useless-length-check](docs/rules/no-useless-length-check.md) | Disallow useless array length check. | ✅ | 🔧 |  |
| [no-useless-promise-resolve-reject](docs/rules/no-useless-promise-resolve-reject.md) | Disallow returning/yielding `Promise.resolve/reject()` in async functions or promise callbacks | ✅ | 🔧 |  |
| [no-useless-spread](docs/rules/no-useless-spread.md) | Disallow unnecessary spread. | ✅ | 🔧 |  |
| [no-useless-undefined](docs/rules/no-useless-undefined.md) | Disallow useless `undefined`. | ✅ | 🔧 |  |
| [no-zero-fractions](docs/rules/no-zero-fractions.md) | Disallow number literals with zero fractions or dangling dots. | ✅ | 🔧 |  |
| [number-literal-case](docs/rules/number-literal-case.md) | Enforce proper case for numeric literals. | ✅ | 🔧 |  |
| [numeric-separators-style](docs/rules/numeric-separators-style.md) | Enforce the style of numeric separators by correctly grouping digits. | ✅ | 🔧 |  |
| [prefer-add-event-listener](docs/rules/prefer-add-event-listener.md) | Prefer `.addEventListener()` and `.removeEventListener()` over `on`-functions. | ✅ | 🔧 |  |
| [prefer-array-find](docs/rules/prefer-array-find.md) | Prefer `.find(…)` over the first element from `.filter(…)`. | ✅ | 🔧 | 💡 |
| [prefer-array-flat](docs/rules/prefer-array-flat.md) | Prefer `Array#flat()` over legacy techniques to flatten arrays. | ✅ | 🔧 |  |
| [prefer-array-flat-map](docs/rules/prefer-array-flat-map.md) | Prefer `.flatMap(…)` over `.map(…).flat()`. | ✅ | 🔧 |  |
| [prefer-array-index-of](docs/rules/prefer-array-index-of.md) | Prefer `Array#indexOf()` over `Array#findIndex()` when looking for the index of an item. | ✅ | 🔧 | 💡 |
| [prefer-array-some](docs/rules/prefer-array-some.md) | Prefer `.some(…)` over `.filter(…).length` check and `.find(…)`. | ✅ | 🔧 | 💡 |
| [prefer-at](docs/rules/prefer-at.md) | Prefer `.at()` method for index access and `String#charAt()`. |  | 🔧 | 💡 |
| [prefer-code-point](docs/rules/prefer-code-point.md) | Prefer `String#codePointAt(…)` over `String#charCodeAt(…)` and `String.fromCodePoint(…)` over `String.fromCharCode(…)`. | ✅ |  | 💡 |
| [prefer-date-now](docs/rules/prefer-date-now.md) | Prefer `Date.now()` to get the number of milliseconds since the Unix Epoch. | ✅ | 🔧 |  |
| [prefer-default-parameters](docs/rules/prefer-default-parameters.md) | Prefer default parameters over reassignment. | ✅ | 🔧 | 💡 |
| [prefer-dom-node-append](docs/rules/prefer-dom-node-append.md) | Prefer `Node#append()` over `Node#appendChild()`. | ✅ | 🔧 |  |
| [prefer-dom-node-dataset](docs/rules/prefer-dom-node-dataset.md) | Prefer using `.dataset` on DOM elements over calling attribute methods. | ✅ | 🔧 |  |
| [prefer-dom-node-remove](docs/rules/prefer-dom-node-remove.md) | Prefer `childNode.remove()` over `parentNode.removeChild(childNode)`. | ✅ | 🔧 | 💡 |
| [prefer-dom-node-text-content](docs/rules/prefer-dom-node-text-content.md) | Prefer `.textContent` over `.innerText`. | ✅ |  | 💡 |
| [prefer-export-from](docs/rules/prefer-export-from.md) | Prefer `export…from` when re-exporting. | ✅ | 🔧 | 💡 |
| [prefer-includes](docs/rules/prefer-includes.md) | Prefer `.includes()` over `.indexOf()` and `Array#some()` when checking for existence or non-existence. | ✅ | 🔧 | 💡 |
| [prefer-json-parse-buffer](docs/rules/prefer-json-parse-buffer.md) | Prefer reading a JSON file as a buffer. | ✅ | 🔧 |  |
| [prefer-keyboard-event-key](docs/rules/prefer-keyboard-event-key.md) | Prefer `KeyboardEvent#key` over `KeyboardEvent#keyCode`. | ✅ | 🔧 |  |
| [prefer-math-trunc](docs/rules/prefer-math-trunc.md) | Enforce the use of `Math.trunc` instead of bitwise operators. | ✅ | 🔧 | 💡 |
| [prefer-modern-dom-apis](docs/rules/prefer-modern-dom-apis.md) | Prefer `.before()` over `.insertBefore()`, `.replaceWith()` over `.replaceChild()`, prefer one of `.before()`, `.after()`, `.append()` or `.prepend()` over `insertAdjacentText()` and `insertAdjacentElement()`. | ✅ | 🔧 |  |
| [prefer-module](docs/rules/prefer-module.md) | Prefer JavaScript modules (ESM) over CommonJS. | ✅ | 🔧 | 💡 |
| [prefer-negative-index](docs/rules/prefer-negative-index.md) | Prefer negative index over `.length - index` for `{String,Array,TypedArray}#slice()`, `Array#splice()` and `Array#at()`. | ✅ | 🔧 |  |
| [prefer-node-protocol](docs/rules/prefer-node-protocol.md) | Prefer using the `node:` protocol when importing Node.js builtin modules. | ✅ | 🔧 |  |
| [prefer-number-properties](docs/rules/prefer-number-properties.md) | Prefer `Number` static properties over global ones. | ✅ | 🔧 | 💡 |
| [prefer-object-from-entries](docs/rules/prefer-object-from-entries.md) | Prefer using `Object.fromEntries(…)` to transform a list of key-value pairs into an object. | ✅ | 🔧 |  |
| [prefer-optional-catch-binding](docs/rules/prefer-optional-catch-binding.md) | Prefer omitting the `catch` binding parameter. | ✅ | 🔧 |  |
| [prefer-prototype-methods](docs/rules/prefer-prototype-methods.md) | Prefer borrowing methods from the prototype instead of the instance. | ✅ | 🔧 |  |
| [prefer-query-selector](docs/rules/prefer-query-selector.md) | Prefer `.querySelector()` over `.getElementById()`, `.querySelectorAll()` over `.getElementsByClassName()` and `.getElementsByTagName()`. | ✅ | 🔧 |  |
| [prefer-reflect-apply](docs/rules/prefer-reflect-apply.md) | Prefer `Reflect.apply()` over `Function#apply()`. | ✅ | 🔧 |  |
| [prefer-regexp-test](docs/rules/prefer-regexp-test.md) | Prefer `RegExp#test()` over `String#match()` and `RegExp#exec()`. | ✅ | 🔧 |  |
| [prefer-set-has](docs/rules/prefer-set-has.md) | Prefer `Set#has()` over `Array#includes()` when checking for existence or non-existence. | ✅ | 🔧 | 💡 |
| [prefer-spread](docs/rules/prefer-spread.md) | Prefer the spread operator over `Array.from(…)`, `Array#concat(…)`, `Array#slice()` and `String#split('')`. | ✅ | 🔧 | 💡 |
| [prefer-string-replace-all](docs/rules/prefer-string-replace-all.md) | Prefer `String#replaceAll()` over regex searches with the global flag. |  | 🔧 |  |
| [prefer-string-slice](docs/rules/prefer-string-slice.md) | Prefer `String#slice()` over `String#substr()` and `String#substring()`. | ✅ | 🔧 |  |
| [prefer-string-starts-ends-with](docs/rules/prefer-string-starts-ends-with.md) | Prefer `String#startsWith()` & `String#endsWith()` over `RegExp#test()`. | ✅ | 🔧 | 💡 |
| [prefer-string-trim-start-end](docs/rules/prefer-string-trim-start-end.md) | Prefer `String#trimStart()` / `String#trimEnd()` over `String#trimLeft()` / `String#trimRight()`. | ✅ | 🔧 |  |
| [prefer-switch](docs/rules/prefer-switch.md) | Prefer `switch` over multiple `else-if`. | ✅ | 🔧 |  |
| [prefer-ternary](docs/rules/prefer-ternary.md) | Prefer ternary expressions over simple `if-else` statements. | ✅ | 🔧 |  |
| [prefer-top-level-await](docs/rules/prefer-top-level-await.md) | Prefer top-level await over top-level promises and async function calls. |  |  | 💡 |
| [prefer-type-error](docs/rules/prefer-type-error.md) | Enforce throwing `TypeError` in type checking conditions. | ✅ | 🔧 |  |
| [prevent-abbreviations](docs/rules/prevent-abbreviations.md) | Prevent abbreviations. | ✅ | 🔧 |  |
| [relative-url-style](docs/rules/relative-url-style.md) | Enforce consistent relative URL style. | ✅ | 🔧 |  |
| [require-array-join-separator](docs/rules/require-array-join-separator.md) | Enforce using the separator argument with `Array#join()`. | ✅ | 🔧 |  |
| [require-number-to-fixed-digits-argument](docs/rules/require-number-to-fixed-digits-argument.md) | Enforce using the digits argument with `Number#toFixed()`. | ✅ | 🔧 |  |
| [require-post-message-target-origin](docs/rules/require-post-message-target-origin.md) | Enforce using the `targetOrigin` argument with `window.postMessage()`. |  |  | 💡 |
| [string-content](docs/rules/string-content.md) | Enforce better string content. |  | 🔧 | 💡 |
| [template-indent](docs/rules/template-indent.md) | Fix whitespace-insensitive template indentation. |  | 🔧 |  |
| [throw-new-error](docs/rules/throw-new-error.md) | Require `new` when throwing an error. | ✅ | 🔧 |  |

<!-- RULES_TABLE_END -->

## Deprecated Rules

See [docs/deprecated-rules.md](docs/deprecated-rules.md)

## Recommended config

This plugin exports a [`recommended` config](configs/recommended.js) that enforces good practices.

Enable it in your `package.json` with the `extends` option:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": "plugin:@rinfel/unicorn/recommended"
	}
}
```

See the [ESLint docs](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) for more information about extending config files.

**Note**: This config will also enable the correct [parser options](https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options) and [environment](https://eslint.org/docs/user-guide/configuring/language-options#specifying-environments).

## All config

This plugin exports an [`all` config](configs/all.js) that makes use of all rules (except for deprecated ones).

Enable it in your `package.json` with the `extends` option:

```json
{
	"name": "my-awesome-project",
	"eslintConfig": {
		"extends": "plugin:@rinfel/unicorn/all"
	}
}
```

See the [ESLint docs](https://eslint.org/docs/user-guide/configuring/configuration-files#extending-configuration-files) for more information about extending config files.

## Maintainers

- [Sindre Sorhus](https://github.com/sindresorhus)
- [Fisker Cheung](https://github.com/fisker)
- [Bryan Mishkin](https://github.com/bmish)
- [futpib](https://github.com/futpib)

### Former

- [Jeroen Engels](https://github.com/jfmengels)
- [Sam Verschueren](https://github.com/SamVerschueren)
- [Adam Babcock](https://github.com/MrHen)
