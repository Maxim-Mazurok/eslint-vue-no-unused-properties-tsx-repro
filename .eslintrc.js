module.exports = {
  root: true,
  env: {
    node: true,
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:vue/essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    project: "./tsconfig.eslint.json",
    extraFileExtensions: [".json"],
    ecmaFeatures: {
      jsx: true,
    },
    jsxPragma: "preserve",
  },
  rules: {
    "vue/no-unused-properties": [
      "warn",
      {
        groups: ["props", "data", "computed", "methods", "setup"],
      },
    ],
  },
};
