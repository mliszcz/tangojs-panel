
export default {
  entry: 'src/index.js',
  dest: 'dist/tangojs-panel.js',
  format: 'iife',
  moduleName: 'tjp',
  plugins: [],
  external: [
    'window',
    'preact',
    'redux',
    'tangojs-core',
    'tangojs-web-components'
  ],
  globals: {
    'window': 'window',
    'preact': 'preact',
    'redux': 'Redux',
    'tangojs-core': 'tangojs.core',
    'tangojs-web-components': 'tangojs.web'
  },
  sourceMap: true
}
