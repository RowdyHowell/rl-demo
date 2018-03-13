module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  env: {
    browser: true
  },
  rules: {}
};
