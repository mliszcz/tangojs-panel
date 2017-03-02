
const myplug = {
  name: 'myplug',
  transform: (source, id) => {
    console.warn(`CODE: ${source}`)
    return source
  }
}

export default {
  entry: 'test/reducers.test.js',
  dest: 'dist/test.js',
  format: 'cjs',
  plugins: [ myplug ],
  external: [
    'chai',
    'chai-as-promised',
    'sinon',
    'sinon-chai',
    'tangojs-core'
  ],
  sourceMap: 'inline'
}
