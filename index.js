'use strict';
const createDeprecatedRules = require('./rules/utils/create-deprecated-rules.js');
const {loadRules} = require('./rules/utils/rule.js');
const recommendedConfig = require('./configs/recommended.js');
const all = require('./configs/all.js');

const deprecatedRules = createDeprecatedRules({
	// {ruleId: ReplacementRuleId | ReplacementRuleId[]}, if no replacement, use `{ruleId: []}`
	'no-array-instanceof': '@rinfel/unicorn/no-instanceof-array',
	'no-fn-reference-in-iterator': '@rinfel/unicorn/no-array-callback-reference',
	'no-reduce': '@rinfel/unicorn/no-array-reduce',
	'prefer-dataset': '@rinfel/unicorn/prefer-dom-node-dataset',
	'prefer-event-key': '@rinfel/unicorn/prefer-keyboard-event-key',
	'prefer-exponentiation-operator': 'prefer-exponentiation-operator',
	'prefer-flat-map': '@rinfel/unicorn/prefer-array-flat-map',
	'prefer-node-append': '@rinfel/unicorn/prefer-dom-node-append',
	'prefer-node-remove': '@rinfel/unicorn/prefer-dom-node-remove',
	'prefer-object-has-own': 'prefer-object-has-own',
	'prefer-replace-all': '@rinfel/unicorn/prefer-string-replace-all',
	'prefer-starts-ends-with': '@rinfel/unicorn/prefer-string-starts-ends-with',
	'prefer-text-content': '@rinfel/unicorn/prefer-dom-node-text-content',
	'prefer-trim-start-end': '@rinfel/unicorn/prefer-string-trim-start-end',
	'regex-shorthand': '@rinfel/unicorn/better-regex',
});

module.exports = {
	rules: {
		...loadRules(),
		...deprecatedRules,
	},
	configs: {
		recommended: recommendedConfig,
		all,
	},
};
