'use strict';
const getDocumentationUrl = require('./utils/get-documentation-url');
const replaceTemplateElement = require('./utils/replace-template-element');

const escapeWithLowercase = /(?<=(?:^|[^\\])(?:\\\\)*\\)(?<data>x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|u{[\dA-Fa-f]+})/g;
const escapePatternWithLowercase = /(?<=(?:^|[^\\])(?:\\\\)*\\)(?<data>x[\dA-Fa-f]{2}|u[\dA-Fa-f]{4}|u{[\dA-Fa-f]+}|c[a-z])/g;
const message = 'Use uppercase characters for the value of the escape sequence.';

const create = context => {
	const check = ({node, original, regex = escapeWithLowercase, fix}) => {
		const fixed = original.replace(regex, data => data.slice(0, 1) + data.slice(1).toUpperCase());

		if (fixed !== original) {
			context.report({
				node,
				message,
				fix: fixer => fix ? fix(fixer, fixed) : fixer.replaceText(node, fixed)
			});
		}
	};

	return {
		Literal(node) {
			if (typeof node.value !== 'string') {
				return;
			}

			check({
				node,
				original: node.raw
			});
		},
		'Literal[regex]'(node) {
			check({
				node,
				original: node.raw,
				regex: escapePatternWithLowercase
			});
		},
		TemplateElement(node) {
			check({
				node,
				original: node.value.raw,
				fix: (fixer, fixed) => replaceTemplateElement(fixer, node, fixed)
			});
		}
	};
};

module.exports = {
	create,
	meta: {
		type: 'suggestion',
		docs: {
			url: getDocumentationUrl(__filename)
		},
		fixable: 'code'
	}
};
