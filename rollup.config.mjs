import { readFileSync } from 'node:fs'
import { defineConfig } from 'rollup'
import dts from 'rollup-plugin-dts'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import typescriptEngine from 'typescript'

import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'

const packageJson = JSON.parse(readFileSync('./package.json'))

const config = defineConfig(
  {
    input: './src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: false,
        exports: 'named',
        name: packageJson.name,
      },
      {
        file: packageJson.module,
        format: 'es',
        exports: 'named',
        sourcemap: false,
      },
    ],
    plugins: [
      postcss({
        plugins: [],
        minimize: true,
      }),
      external({ includeDependencies: true }),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        typescript: typescriptEngine,
        sourceMap: false,
        exclude: [
          'coverage',
          '.storybook',
          'storybook-static',
          'config',
          'dist',
          'node_modules/**',
          '*.cjs',
          '*.mjs',
          '**/__snapshots__/*',
          '**/__tests__',
          '**/*.test.js+(|x)',
          '**/*.test.ts+(|x)',
          '**/*.mdx',
          '**/*.story.ts+(|x)',
          '**/*.story.js+(|x)',
          '**/*.stories.ts+(|x)',
          '**/*.stories.js+(|x)',
          'setup-tests.ts',
          'vitest.config.ts',
        ],
      }),
      url(),
      svgr(),
      terser(),
    ],
  },
  {
    input: 'dist/esm/types/src/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    external: [/\.(sc|sa|c)ss$/],
    plugins: [dts()],
  },
)

export default config
