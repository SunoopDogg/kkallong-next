module.exports = {
  printWidth: 80,
  trailingComma: 'all',
  singleQuote: true,
  semi: true,
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require.resolve('prettier-plugin-tailwindcss')],
};
