
import NYC from 'nyc'
import multientry from 'rollup-plugin-multi-entry'
import { createFilter } from 'rollup-pluginutils'

const nyc = new NYC()
const istanbul = nyc._instrumenterLib.istanbul()

function coverage(options = {}) {
  const filter = createFilter(options.include, options.exclude)
  return {
    transform(source, id) {

      if (!filter(id)) {
        return
      }

      const instrumenter = istanbul.createInstrumenter(options.instrumenterConfig)
      const code = instrumenter.instrumentSync(source, id)

      const map = options.produceSourceMap
        && instrumenter.lastSourceMap()
        || { mappings: '' }

      return { code, map }
    }
  }
}

export default {
  entry: 'test/**/*.test.js',
  dest: 'dist/tests.js',
  format: 'cjs',
  plugins: [
    multientry(),
    coverage({
      include: [ 'src/**/*.js' ],
      instrumenterConfig: {
        compact: false,
        esModules: true,
        preserveComments: true,
        produceSourceMap: true
      }
    })
  ],
  external: [
    'chai',
    'chai-as-promised',
    'sinon',
    'sinon-chai',
    'tangojs-core'
  ],
  sourceMap: 'inline'
}
