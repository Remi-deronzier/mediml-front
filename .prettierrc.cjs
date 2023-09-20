/* eslint-disable no-undef */
module.exports = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  printWidth: 80,
  plugins: [
    // https://github.com/trivago/prettier-plugin-sort-imports
    '@trivago/prettier-plugin-sort-imports',
    // https://github.com/tailwindlabs/prettier-plugin-tailwindcss
    'prettier-plugin-tailwindcss',
  ],
  importOrder: [
    '^react(.*)',
    '<THIRD_PARTY_MODULES>',
    '^@api/(.*)$',
    '^@hooks/(.*)$',
    '^@components/(.*)$',
    '^@utils/(.*)$',
    '@/(.*)',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  tailwindFunctions: ['cva', 'tw'],
};
