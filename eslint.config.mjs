import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import perfectionist from 'eslint-plugin-perfectionist';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
  {
    plugins: { perfectionist },
    rules: {
      'import/order': 'off',
      'sort-imports': 'off',

      'perfectionist/sort-imports': [
        'error',
        {
          type: 'natural',
          order: 'asc',
          ignoreCase: true,
          internalPattern: ['^@/.+'],
          newlinesBetween: 1,
          groups: [
            'type-import',
            'react',
            'next',
            'value-builtin',
            'value-external',
            'value-internal',
            ['value-parent', 'value-sibling', 'value-index'],
            'side-effect',
            'side-effect-style',
            'style',
            'unknown',
          ],
          customGroups: [
            {
              groupName: 'react',
              modifiers: ['value'],
              selector: 'import',
              elementNamePattern: ['^react$', '^react-dom'],
            },
            {
              groupName: 'next',
              modifiers: ['value'],
              selector: 'import',
              elementNamePattern: ['^next$', '^next/'],
            },
          ],
          environment: 'node',
        },
      ],
    },
  },
]);

export default eslintConfig;
