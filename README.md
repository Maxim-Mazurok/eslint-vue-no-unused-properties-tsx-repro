# Reproduction for ["`vue/no-unused-properties` doesn't work in JSX/TSX"](https://github.com/vuejs/eslint-plugin-vue/issues/1838) in [vuejs/eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue)

[src\components\UnusedProp.tsx](src\components\UnusedProp.tsx) has as `unusedProperty` prop, which is unused.

And I have `vue/no-unused-properties` rule turned on, yet `npm run lint` doesn't show any warnings.

## Getting started

1. Make sure you have node/npm versions same as in package.json -> engines section
2. `npm ci`
3. `npm run lint` to lint or `npm start` to serve (should show `<h2>I have unused prop :(</h2>` page)
