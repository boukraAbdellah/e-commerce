module.exports = {
  root: true,
  extends: ['plugin:@next/next/recommended', '@payloadcms'],
  ignorePatterns: ['**/payload-types.ts'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',
    'prettier/prettier': 0,
    "simple-import-sort/imports": "off",
    "simple-import-sort/exports": "off"
  },
}
