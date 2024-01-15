module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
  extends: ["@nuxtjs/eslint-config-typescript", "plugin:prettier/recommended"],
  plugins: [],
  rules: {
    "prettier/prettier": [
      "error",
      {
        semi: false,
        singleAttributePerLine: true,
      },
    ],
    "max-lines": ["error", 400],
    indent: ["error", 2],
    "vue/no-v-html": "off",
  },
}
