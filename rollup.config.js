import multiInput from 'rollup-plugin-multi-input';
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import del from 'rollup-plugin-delete';
import typescript from 'rollup-plugin-typescript2';
import renameNodeModules from 'rollup-plugin-rename-node-modules';
import postcss from 'rollup-plugin-postcss';
import litcss from 'rollup-plugin-postcss-lit';
import InlineSvg from 'rollup-plugin-inline-svg';
import copy from 'rollup-plugin-copy';
import alias from '@rollup/plugin-alias';

export default {
  input: ['./src/**/index.ts'],
  output: {
    dir: 'dist',
    format: 'es',
    sourcemap: true,
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  external: [/shidoka-foundation\/components/],
  plugins: [
    del({ targets: 'dist/*' }),
    multiInput.default(),
    resolve(),
    renameNodeModules(),
    copy({
      targets: [
        { src: 'package.json', dest: 'dist' },
        { src: 'README.md', dest: 'dist' },
        { src: 'src/root.css', dest: 'dist' },
      ],
    }),
    InlineSvg(),
    typescript(),
    postcss({
      inject: false,
    }),
    litcss(),
    terser(),
    alias({
      entries: [
        { find: 'common', replacement: './src/common' },
        { find: 'components', replacement: './src/components' },
        { find: 'scss', replacement: './src/scss' },
        { find: 'stories', replacement: './src/stories' },
      ]
    })
  ],
};
