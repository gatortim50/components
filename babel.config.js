module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['>0.25%', 'not op_mini all']
        },
        modules: false,
        loose: true,
        useBuiltIns: 'usage'
      }
    ],
    [
      '@babel/preset-react',
      {
        useBuiltIns: true
      }
    ]
  ],
  plugins: [
    ['@babel/plugin-proposal-decorators', { decoratorsBeforeExport: true }],
    ['@babel/plugin-proposal-class-properties'],
    'styled-components',
    [
      'module-resolver',
      {
        root: ['./src']
      }
    ]
  ],
  env: {
    test: {
      plugins: ['transform-es2015-modules-commonjs']
    }
  }
}
