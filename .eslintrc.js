module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  settings: {
    react: {
      version: 'detect'
    }
  },
  globals: {
    React: true
  },
  rules: {
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'react/prop-types': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-namespace': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    indent: 'off',
    'linebreak-style': 'off',
    quotes: [
      'error',
      'single',
      {
        avoidEscape: true
      }
    ],
    semi: ['error', 'never'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'no-useless-escape': 'off'
  }
}
