module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['airbnb', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', 'react-hooks'],
  rules: {
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'linebreak-style': 0,
    'import/extensions': ['error', 'never'],
    'import/prefer-default-export': 'off',
    'react/react-in-jsx-scope': 0,
    'no-trailing-spaces': 'warn',
    'import/no-unresolved': [2, { ignore: ['^@/'] }],
    'react/prop-types': 0,
    'react/destructuring-assignment': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'react/no-unstable-nested-components': 'off',
    'react/display-name': 'off',
    'react/no-unescaped-entities': 'off',
    'no-console': 'off',
	'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
  ignorePatterns: ['.eslintrc.js'],
};
