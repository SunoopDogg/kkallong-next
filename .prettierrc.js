module.exports = {
  arrowParens: 'avoid',
  endOfLine: 'lf',
  singleQuote: true,
  trailingComma: 'all',
  overrides: [
    {
      files: '*.json',
      options: {
        printWidth: 100,
      },
    },
  ],
  importOrder: [
    'react',
    'next',
    '<THIRD_PARTY_MODULES>',
    '^@/',
    '^[a-zA-Z/\\-]',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  experimentalBabelParserPluginsList: ['jsx', 'typescript', 'typescriptreact'],
  plugins: [
    require.resolve('@trivago/prettier-plugin-sort-imports'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
};
