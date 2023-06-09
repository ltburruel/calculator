module.exports = {
  extends: ['airbnb-base', 'prettier'],
  env: {
    node: true,
    mocha: true,
  },
  plugins: ['import', 'prettier'],
  root: true,
  rules: {
    // http://eslint.org/docs/user-guide/migrating-to-4.0.0#-the-indent-rule-is-more-strict
    'prettier/prettier': ['error', { arrowParents: 'always', printWidth: 160, singleQuote: true, trailingComma: 'all' }],
    indent: [
      'error',
      2,
      {
        MemberExpression: 0, // Allows inline member expressions
        SwitchCase: 1, // Allows indentation of 'case' after 'switch'
      },
    ],
    'max-len': [2, 160, 2, { ignoreComments: true }],
    'no-underscore-dangle': 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],
    curly: [2, 'all'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-unused-expressions': 0,
    'arrow-body-style': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'require-await': 'off',

    // updated rules following upgrade to eslint-airbnb v17
    // the following changes are primarily related to coding style and require too many code changes to apply
    'function-paren-newline': ['warn', 'consistent'], // establish consistency in the way we write parameters into functions
    'no-else-return': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'prefer-destructuring': 'off',
  },
  globals: {
    // UpToDateError: true,
  },
};
