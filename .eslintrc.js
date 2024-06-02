module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "eslint:recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    quotes: 0,
    "react/jsx-filename-extension": 0,
    "react/react-in-jsx-scope": 0,
    "comma-dangle": 0,
    "linebreak-style": 0,
  },
};
