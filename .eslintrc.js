module.exports={
  env: {
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      {
        extension: [ '.jsx', '.js']
      }
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor' : 'off',
    'react/static-property-placement' : 'off',
    'react/jsx-props-no-spreading' : 'off',
    'react/sort-comp' : 'off',
    'no-throw-literal' : 'off',
    'react/destructuring-assignment': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/prefer-stateless-function': 'off',
    'eslint-disable-next-line': 'off',
    'no-param-reassign': 'off',
    'no-console': ["error", { allow: ["tron"] }]
  },
};
