import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'
import reactSvg from 'rollup-plugin-react-svg'
import copy from 'rollup-plugin-copy'

export default {
  input: './src/index.js',

  output: {
    file: pkg.module,
    format: 'es',
    sourcemap: true
  },

  plugins: [
    postcss({
      plugins: []
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    copy({
      './src/Icon/svgIcons': './dist/svgIcons',
      verbose: true
    }),
    reactSvg({
      svgo: {
        plugins: [
          {
            cleanupIDs: true
          }
        ]
      },
      jsx: true
    }),
    resolve(),
    commonjs()
  ],

  // NOTE: any package that will likely end up as a dependency in the framework
  // can be added here to reduce the package size
  external: [
    'react',
    'react-dom',
    'react-router',
    'react-router-dom',
    'prop-types',
    'styled-components',
    'styled-system'
  ]
}
