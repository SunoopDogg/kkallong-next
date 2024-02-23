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
    '^~(.+)$',
    '^[./]',
    '^[a-zA-Z@/\\-]*\\.[a-zA-Z0-9]*$',
    '^(.+)$',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrderCaseInsensitive: true,
  experimentalBabelParserPluginsList: ['jsx', 'typescript', 'typescriptreact'],
  plugins: [require.resolve('@trivago/prettier-plugin-sort-imports')],
};
