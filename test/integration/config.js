'use strict';

module.exports = {
	root: true,
	parser: '@babel/eslint-parser',
	parserOptions: {
		requireConfigFile: false,
		babelOptions: {
			babelrc: false,
			configFile: false,
			parserOpts: {
				plugins: [
					'jsx',
					'doExpressions',
					'exportDefaultFrom',
				],
			},
		},
	},
	plugins: [
		'@rinfel/unicorn',
	],
	extends: 'plugin:@rinfel/unicorn/all',
	rules: {
		// This rule crashing on replace string inside `jsx` or `Unicode escape sequence`
		'@rinfel/unicorn/string-content': 'off',
	},
	overrides: [
		{
			files: ['*.ts'],
			parser: '@typescript-eslint/parser',
		},
		{
			files: ['*.vue'],
			parser: 'vue-eslint-parser',
		},
	],
};
