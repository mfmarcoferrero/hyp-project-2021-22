module.exports = {
  root: false,
  env: {
    browser: false,
    node: false,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    "vue/require-prop-type-constructor" : "off",
    "vue/multi-word-component-names" : "off"
  },
}
