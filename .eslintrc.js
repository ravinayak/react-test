module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'plugin:jsx-a11y/recommended',
    'plugin:json/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    '@types/lodash.add',
    'jest',
    'jsx-a11y',
    'testing-library',
    'prettier',
  ],
  rules: {
    '@typescript-eslint/no-shadow': ['error'],
    "@typescript-eslint/no-unused-vars": "error",
    "camelcase": ["error", {
      properties: "never",
      allow: ["redirect_uri", "redirect_type"]
    }],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-default-export': 2,
    'no-console': ['error'],
    'no-shadow': 'off',
    "no-unused-vars": "off",
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'testing-library/consistent-data-testid': [
      2,
      {
        testIdAttribute: ['data-test-id'],
        testIdPattern: '^([a-z]+-){1,}([a-z]{2,})?$',
      },
    ],
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
      node: {
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};
