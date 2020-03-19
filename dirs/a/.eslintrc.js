
exports.env = {
  browser: true,
  es6: true,
  'jest/globals': true,
}

exports.extends = [
  'airbnb',
  'eslint:recommended',
  'plugin:flowtype/recommended',
]

exports.parser = 'babel-eslint'

exports.parserOptions = {
  ecmaVersion: 6,
  sourceType: 'module',
}

exports.plugins = [
  'jest',
]

exports.rules = {
  'implicit-arrow-linebreak': 'off',
  // problems with linter in vscode
  'import/no-unresolved': 'off',
  'operator-linebreak': 'off',
  'jsx-a11y/anchor-is-valid': ['warn', { 'aspects': ['invalidHref'] }],

  'import/extensions': 'off',

  'react/no-danger': 'off',
  'react/no-unused-state': 'off',
  'react/no-array-index-key': 'off',
  'react/sort-comp': 'off',
  'jsx-a11y/no-static-element-interactions': 'off',
  'jsx-a11y/label-has-for': 'off',
  'no-plusplus': 'off',
  'no-nested-ternary': 'off',
  'react/jsx-filename-extension': 'off',
  'function-paren-newline': ['error', 'consistent'],
  'import/prefer-default-export': 'off',

  // https://github.com/yannickcr/eslint-plugin-react/issues/1389
  'react/no-typos': 'off',

  // https://github.com/babel/babel-eslint/issues/513
  'object-curly-newline': 'off',

  // off
  'arrow-body-style': 'off',
  'arrow-parens': 'off',
  'comma-dangle': 'off',
  'semi': 'off',
  'yoda': 'off',

  // warn
  'no-shadow': 'warn',
  'no-unused-vars': 'warn',
  'padded-blocks': 'warn',
  'max-len': 'warn',
}
