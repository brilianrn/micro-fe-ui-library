import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

export default [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    ignores: [
      '**/node_modules/**',
      '**/.next/**',
      '**/prisma/**',
      '**/dist/**',
      '**/out/**',
      '**/public/**',
      '**/storybook-static/**',
      '**/cypress/**',
      '**/src/shared/styles/**/*',
    ],
  },
]
