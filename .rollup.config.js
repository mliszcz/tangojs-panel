
export default {
  entry: 'src/index.js',
  dest: 'dist/tangojs-panel.js',
  format: 'iife',
  moduleName: 'tangojsPanel',
  plugins: [],
  external: [
    'window',
    'preact',
    'react',
    'react-burger-menu',
    'react-grid-layout',
    'preact-redux',
    'ramda',
    'redux',
    'tangojs-core',
    'tangojs-web-components'
  ],
  globals: {
    'window': 'window',
    'preact': 'preact',
    'react': 'preact',
    'react-burger-menu': 'BurgerMenu',
    'react-grid-layout': 'ReactGridLayout',
    'preact-redux': 'preactRedux',
    'ramda': 'R',
    'redux': 'Redux',
    'tangojs-core': 'tangojs.core',
    'tangojs-web-components': 'tangojs.web'
  },
  sourceMap: true
}
