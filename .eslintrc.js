'use strict';

// ESLint rules by type (in addition to or overriding airbnb-base).
// See: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base/rules
const errors = {
  'no-cond-assign': ['error', 'except-parens'],
  'no-unexpected-multiline': 'error',
};

const bestPractices = {
  'class-methods-use-this': 'off',
  curly: ['error', 'all'],
  'no-param-reassign': ['error', { props: false }],
  'no-unmodified-loop-condition': 'error',
  'no-unused-expressions': [
    'error',
    {
      allowShortCircuit: true,
      allowTernary: true,
      allowTaggedTemplates: false,
    },
  ],
  'require-await': 'error',
};

const strict = {
  strict: ['error', 'safe'],
};

const variables = {
  'no-undefined': 'error',
  'no-use-before-define': [
    'error',
    {
      functions: false,
      classes: true,
      variables: false,
    },
  ],
};

const node = {
  'no-mixed-requires': 'error',
};

const style = {
  'func-names': 'off',
  'lines-around-comment': [
    'error',
    {
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: true,
      afterLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: true,
      allowObjectStart: true,
      allowObjectEnd: true,
      allowArrayStart: true,
      allowArrayEnd: true,
    },
  ],
  'max-len': ['error', 100],
  'multiline-comment-style': ['error', 'starred-block'],
  'new-cap': 'error',
  'no-continue': 'off',
  'no-negated-condition': 'error',
  'no-plusplus': 'off',
  'no-restricted-syntax': [
    'error',
    {
      selector: 'ForInStatement',
      message:
        'for..in loops iterate over the entire prototype chain, which is ' +
        'virtually never what you want. Use Object.{keys,values,entries}, and' +
        'iterate over the resulting array.',
    },
    {
      selector: 'LabeledStatement',
      message:
        'Labels are a form of GOTO; using them makes code confusing and hard ' +
        'to maintain and understand.',
    },
    {
      selector: 'WithStatement',
      message:
        '`with` is disallowed in strict mode because it makes code ' +
        'impossible to predict and optimize.',
    },
  ],
  'no-underscore-dangle': 'off',
  'one-var': ['error', { initialized: 'never', uninitialized: 'always' }],
  'padding-line-between-statements': [
    'error',
    { blankLine: 'always', prev: '*', next: ['return', 'throw'] },

    { blankLine: 'always', prev: 'directive', next: '*' },
    { blankLine: 'any', prev: 'directive', next: 'directive' },

    { blankLine: 'always', prev: 'cjs-import', next: '*' },
    { blankLine: 'any', prev: 'cjs-import', next: 'cjs-import' },

    { blankLine: 'always', prev: 'import', next: '*' },
    { blankLine: 'any', prev: 'import', next: 'import' },
  ],
};

const es6 = {
  'no-confusing-arrow': 'error',
  'prefer-const': [
    'error',
    { destructuring: 'all', ignoreReadBeforeAssign: true },
  ],
  'prefer-destructuring': 'off',
};

const plugins = {
  'import/no-extraneous-dependencies': [
    'error',
    {
      devDependencies: true,
      optionalDependencies: false,
      peerDependencies: false,
    },
  ],
  'import/prefer-default-export': false,
};

module.exports = {
  root: true,
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'script',
    ecmaVersion: 9,
  },
  rules: Object.assign(
    {},
    errors,
    bestPractices,
    strict,
    variables,
    style,
    es6,
    plugins
  ),
};
