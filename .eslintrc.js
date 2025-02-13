module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'eslint:recommended',
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {'semi': ['error', 'always'],
    'quotes': [
      'error',
      'single',
      {
        'allowTemplateLiterals': true,
      },
    ],
    'no-unused-vars': [
      'warn',
      {
        'vars': 'all',
      },
    ],},
};
