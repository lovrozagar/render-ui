import { getFiles } from './scripts/buildUtils'
import peerDeps from 'rollup-plugin-peer-deps-external'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'
import visualizer from 'rollup-plugin-visualizer'

import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'

const extensions = ['.js', '.ts', '.jsx', '.tsx']

const excludeExtensions = [
  'test.js',
  'test.ts',
  'test.jsx',
  'test.tsx',
  'spec.js',
  'spec.ts',
  'spec.jsx',
  'spec.tsx',
  'story.js',
  'story.ts',
  'story.jsx',
  'story.tsx',
]

/** @type {import('rollup').RollupOptions} */
export default {
  input: ['./src/index.ts', ...getFiles('./src/components', extensions, excludeExtensions)],
  output: {
    dir: 'dist',
    format: 'esm',
    preserveModules: true,
    preserveModulesRoot: 'src',
    sourcemap: true,
  },
  plugins: [
    peerDeps(),
    resolve(),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.build.json',
      declaration: true,
      declarationDir: 'dist',
    }),
    typescriptPaths(),
    visualizer({
      filename: 'bundle-analysis.html',
      open: false,
    }),
  ],
}
